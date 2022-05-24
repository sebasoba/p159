AFRAME.registerComponent("highlight",{
    handleMouseEnterEvents: function(){
        this.el.addEventListener("mouseenter", () => {
            const id = this.el.getAttribute("id");
            const postersId = [
                "superman",
                "spiderman",
                "captain-aero",
                "outer-space",
            ];
            if (postersId.includes(id)){
                const postersContainer = document.querySelector("#posters-container");
                postersContainer.setAttribute("cursor-listener", {
                    selectedItemId: id,
                })
                this.el.setAttribute("material", { color: "#1565c0"})
            }
        })
    },

    init: function() {
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    }
}) 