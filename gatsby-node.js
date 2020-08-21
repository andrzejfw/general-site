const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(`https://cl.estorecontent.com/api/v2/product-detail/117762/?language=et&token=d834cd2d30ab68adcfe288ee245bc3a33db05d6f&manufacturer=634`)
  const resultData = await result.json()
 
  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    name: resultData.name.default,
    brand: resultData.brand.name,
    imageUrl: resultData.images[0].url,
   
    // required fields
    id: `example-build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Example`,
      contentDigest: createContentDigest(resultData),
    },
  })
}