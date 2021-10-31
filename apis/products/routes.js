const express = require("express");
const {productlistFetch, productCreate ,productDelete,productUpdate,productDetailFetch} = require("./controllers")

const router = express.Router();

router.param("productId", async (req, res, next, productId) => {
    const product = await productDetailFetch(productId, next);
    if (product) {
        req.product = product;
        next();
    } else {
        next({ status: 404, message: "Not Found"});
    }
});

router.get("/", productlistFetch);

router.post("/",productCreate);

router.delete("/:productId",productDelete);

router.put("/:productId",productUpdate);

router.get("/:productId", productDetailFetch)

module.exports = router;