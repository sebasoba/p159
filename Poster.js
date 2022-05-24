AFRAME.registerComponent("poster",{
    createPoster: function(item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height: 28
        })
        entityEl.setAttribute("position", {x: 0, y: 5, z:0.1});
        entityEl.setAttribute("material", {src:item.url});
    }
}) 