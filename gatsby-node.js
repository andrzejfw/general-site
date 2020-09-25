const fetch = require(`node-fetch`)
const path = require(`path`)
const slugify = require('slugify');

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest
}) => {
  // get data from GitHub API at build time
  const result = await fetch(`https://cl.estorecontent.com/api/v2/product-detail/201608/?language=et&token=d834cd2d30ab68adcfe288ee245bc3a33db05d6f&manufacturer=634`)
  const result2 = await fetch(`https://cl.estorecontent.com/api/v2/product-detail/203451/?language=et&token=d834cd2d30ab68adcfe288ee245bc3a33db05d6f&manufacturer=634`)

  const resultData = await result.json()
  const resultData2 = await result2.json()
 
  // create node for build time data example in the docs
  createNode({
    
    master:resultData.blocks[0].attributes[0].value,
    fullName: resultData.blocks[0].attributes[1].value,
    brand: resultData.blocks[0].attributes[2].value,
    format:resultData.blocks[0].attributes[3].value,
    shortTitle:resultData.blocks[0].attributes[4].value,
    volume:resultData.blocks[0].attributes[5].value,
    formatOptional:resultData.blocks[0].attributes[6].value,
    tag:resultData.blocks[0].attributes[7].value,
    productLine:resultData.blocks[0].attributes[8].value,
    productDescription:resultData.blocks[0].attributes[9].value,
    feature1:resultData.blocks[0].attributes[10].value,
    feature2:resultData.blocks[0].attributes[11].value,
    feature3:resultData.blocks[0].attributes[12].value,
    feature4:resultData.blocks[0].attributes[13].value,
    feature5:resultData.blocks[0].attributes[14].value,
    feature6:resultData.blocks[0].attributes[15].value,
    productShortDescription:resultData.blocks[0].attributes[16].value,
    productHowToUse:resultData.blocks[0].attributes[17].value,
    productDoYouKnow:resultData.blocks[0].attributes[18].value,
    etailerUrl:resultData.blocks[0].attributes[19].value,
    ingredients:resultData.blocks[0].attributes[20].value,
    allergens:resultData.blocks[0].attributes[21].value,
    language: resultData.language,
    slug:resultData.id,
    
   
    // required fields
    id: `1`,
    parent: null,
    children: [],
    internal: {
      type: `Example`,
      contentDigest: createContentDigest(resultData),
    },
  }),
  createNode({
    
    master:resultData2.blocks[0].attributes[0].value,
    fullName: resultData2.blocks[0].attributes[1].value,
    brand: resultData2.blocks[0].attributes[2].value,
    format:resultData2.blocks[0].attributes[3].value,
    shortTitle:resultData2.blocks[0].attributes[4].value,
    volume:resultData2.blocks[0].attributes[5].value,
    formatOptional:resultData2.blocks[0].attributes[6].value,
    tag:resultData2.blocks[0].attributes[7].value,
    productLine:resultData2.blocks[0].attributes[8].value,
    productDescription:resultData2.blocks[0].attributes[9].value,
    feature1:resultData2.blocks[0].attributes[10].value,
    feature2:resultData2.blocks[0].attributes[11].value,
    feature3:resultData2.blocks[0].attributes[12].value,
    feature4:resultData2.blocks[0].attributes[13].value,
    feature5:resultData2.blocks[0].attributes[14].value,
    feature6:resultData2.blocks[0].attributes[15].value,
    productShortDescription:resultData2.blocks[0].attributes[16].value,
    productHowToUse:resultData2.blocks[0].attributes[17].value,
    productDoYouKnow:resultData2.blocks[0].attributes[18].value,
    etailerUrl:resultData2.blocks[0].attributes[19].value,
    ingredients:resultData2.blocks[0].attributes[20].value,
    allergens:resultData2.blocks[0].attributes[21].value,
    language: resultData2.language,
    slug:resultData2.id,
    
   
    // required fields
    id: `2`,
    parent: null,
    children: [],
    internal: {
      type: `Example`,
      contentDigest: createContentDigest(resultData2),
    },
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/layouts/pdp.js`);
  const resultSites = await graphql(`
  query MyQuery {
    allExample {
      nodes {
        
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
        formatOptional
        fullName
        ingredients
        master
        productDescription
        productDoYouKnow
        productHowToUse
        productLine
        productShortDescription
        shortTitle
        tag
        volume
        slug
      }
    }
  }
  
  `);

  resultSites.data.allExample.nodes.forEach(post => {
    const slugifiedTitle = slugify(post.fullName, {
      lower: true
    });
      
    createPage({
      path: `products/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        slug: post.slug,
      },
    });
  });
};