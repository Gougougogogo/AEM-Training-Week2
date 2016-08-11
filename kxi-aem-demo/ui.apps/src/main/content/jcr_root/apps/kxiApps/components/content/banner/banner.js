use(function () {
    return {
        mainTitle: properties.get("maintext","Main-Tile"),
        subTitle: properties.get("subtext","Sub-Title"),
        t1: properties.get("backgroundImg",String.class),
        t2: properties.get("fileReference",String.class),
        t3: resource.path + "/" +  properties.get("backgroundImgName",String.class),
        background: "background: url('/content/xxy/_jcr_content/banner/image1.img.jpeg')" //TODO: Get uploaded picture url
    };
});