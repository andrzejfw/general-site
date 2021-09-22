const fetch = require(`node-fetch`)
const path = require(`path`)
const slugify = require('slugify');
const fs = require('fs').promises; 

const API = 'https://cl.estorecontent.com/api/v2/'
const LANGUAGE = 'et'
const MANUFACTURER = '634'
const TOKEN = 'd834cd2d30ab68adcfe288ee245bc3a33db05d6f'
const BLOCKS_INDEX = '2';
const FILE = `${__dirname}/data/ids.csv`

const TEMPLATES = {
  // Cif: path.resolve(`src/layouts/pdp-cif.js`),
  // Domestos: path.resolve(`src/layouts/pdp-domestos.js`),
  // Dove: path.resolve(`src/layouts/pdp-dove.js`),
  // 'Hellmann\'s': path.resolve(`src/layouts/pdp-hellmanns.js`),
  Knorr: path.resolve(`src/layouts/pdp-knorr.js`),
  // Lipton: path.resolve(`src/layouts/pdp-lipton.js`),
  // Magnum: path.resolve(`src/layouts/pdp-magnum.js`),
  // Rexona: path.resolve(`src/layouts/pdp-rexona.js`),
}

const PATHS = {
  // Cif: 'cif/products/',
  // Domestos: 'domestos/products/',
  // Dove: 'dove/products/',
  // 'Hellmann\'s': 'hellmanns/products/',
  Knorr: 'knorr/products/',
  // Lipton: 'lipton/products/',
  // Magnum: 'magnum/products/',
  // Rexona: 'rexona/products/',
}

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest
}) => {
  const csv = await fs.readFile(FILE, 'utf8')
  const ids = csv.split('\n')
  await ids.forEach(async (id) => {
    const result = await fetch(`${API}product-detail/${id}/?language=${LANGUAGE}&token=${TOKEN}&manufacturer=${MANUFACTURER}`)
    const resultData = await result.json()

    const blocks = resultData.blocks[BLOCKS_INDEX]
    const attr = blocks.attributes.map(a => a.value || '');

    createNode({
      master: attr[0] || '',
      fullName:  attr[1] || '',
      brand:  attr[2] || '',
      variant: [153444] || '',
      shortTitle: attr[4] || '',
      volume: attr[5] || '',
      format: attr[6] || '',
      productLine: attr[7] || '',
      productDescription: attr[8] || '',
      feature1: attr[9] || '',
      feature2: attr[10] || '',
      feature3: attr[11] || '',
      feature4: attr[12] || '',
      feature5: attr[13] || '',
      feature6: attr[14] || '',
      productShortDescription: attr[15] || '',      
      etailerUrl: attr[16] || '',
      productHowToUse: attr[17] || '',
      ingredients: attr[18] || '',
      allergens: attr[19] || '',
      productDoYouKnow: attr[20] || '',
      // formatOptional: attr[] || '',
      // tag: attr[] || '',
      language: resultData.language,
      slug:resultData.id,
      id: `${resultData.id}`,
      img: resultData.images.length > 0 ? resultData.images[0].url : '',
      parent: null,
      children: [],
      internal: {
        type: `Product`,
        contentDigest: createContentDigest(resultData),
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const resultSites = await graphql(`
  {
    allProduct {
      edges {
        node {
          id
          brand
          allergens
          etailerUrl
          feature1
          feature2
          feature3
          feature4
          feature5
          feature6
          format
          fullName
          ingredients
          master
          productDescription
          productDoYouKnow
          productHowToUse
          productLine
          productShortDescription
          shortTitle
          volume
          slug
          variant
        }
      }
    }
  }`);

  if (resultSites.errors) {
    console.log(resultSites.errors)
    console.error(resultSites.errors)
  }

  const getPath = (brand,id)=>`${PATHS[brand]}${id}`
  // const getProductName = (id)=>resultSites.data.allProduct.edges.find(edge => edge.node.id == id).node.fullName
  const getProductSize =(id)=>resultSites.data.allProduct.edges.find(edge => edge.node.id == id).node.volume
  resultSites.data.allProduct.edges.forEach(edge => {
    const {node} = edge
    const slugifiedTitle = slugify(node.fullName, {
      lower: true
    });
      
    createPage({
      // path: `${PATHS[node.brand]}${node.fullName}_${node.id}`,
      path: getPath(node.brand,node.id),
      component: TEMPLATES[node.brand],
      context: {
        slug: node.slug,
        productName: node.fullName,
        variant: node.variant ? node.variant.map(v => ({id:v,size:getProductSize(v)})) : [],
      },
    });
  });
};

const pageNameMap = {
  "/cif/index/" : "Avaleht",
  "/cif/about/" : "Ettevõttest",
  "/cif/products/" : "Tooted",
  "/domestos/index/" : "Avaleht",
  "/domestos/about/" : "Ettevõttest",
  "/domestos/products/" : "Tooted",
  "/domestos/contact/" : "Kontakt",
  "/domestos/sustainability/" : "Jätkusuutlikkus",
  "/dove/index/" : "Avaleht",
  "/dove/purpose/" : "Meie eesmärk",
  "/dove/sustainability/" : "Jätkusuutlikkus",
  "/dove/products/" : "Tooted",
  "/hellmanns/index/" : "Avaleht",
  "/hellmanns/history/" : "Ajalugu",
  "/hellmanns/sustainability/" : "Jätkusuutlikkus",
  "/hellmanns/products/" : "Tooted",
  "/hellmanns/purpose-one/" : "Purpose one",
  "/hellmanns/purpose-two/" : "Purpose two",
  "/knorr/index/" : "Avaleht",
  "/knorr/about/" : "Kaubamärgist",
  "/knorr/products/" : "Tooted",
  "/knorr/sustainability/" : "Jätkusuutlikkus",
  // "/lipton/index/" : "Avaleht",
  // "/lipton/purpose/" : "Meie eesmärk",
  // "/lipton/products/" : "Tooted",
  // "/lipton/sustainability/" : "Jätkusuutlik elu",
  "/magnum/index/" : "Avaleht",
  "/magnum/delivery/" : "Telli",
  "/magnum/about/" : "Ettevõttest",
  "/magnum/products/" : "Tooted",
  "/rexona/index/" : "Avaleht",
  "/rexona/about/" : "Ettevõttest",
  "/rexona/products/" : "Tooted",
  "/index/" : "Avaleht",
  "/about/" : "Ettevõttest",
  "/brand/" : "Kaubamärgid",
  "/contact/" : "Kontakt",
  "/legal-notice/" : "Juriidiline Teave",
  "/privacy-notice/" : "Privaatsuspoliitika",
  "/sustainability/" : "Meie eesmärk"
}

exports.onCreateNode = ({node, actions}) => {
  let value = "undefined"
  const {createNodeField} = actions;
  if (pageNameMap[node.path]){
    value=pageNameMap[node.path]
  }
  if (node.context && node.context.productName) {
    value = node.context.productName
  }
  createNodeField({node,name:"fullName",value})
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path.match(/^\/[a-z]{3,15}\/404\/$/)) {
    const oldPage = { ...page }

    const brand = page.path.split(`/`)[1]
    page.matchPath = `/${brand}/*`

    deletePage(oldPage)
    createPage(page)
  } else if (page.path.match(/^\/[a-z]{3,15}\/500\/$/)) {
    const oldPage = { ...page }

    const brand = page.path.split(`/`)[1]
    page.matchPath = `/${brand}/*`

    deletePage(oldPage)
    createPage(page)
  }
}