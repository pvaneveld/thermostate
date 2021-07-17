import anime from "animejs/lib/anime.es.js";

export const gridAnimation = (timeline, grid: number[]) => {
    return timeline.add({
        translateX: [
            {
                value: anime.stagger("-.1rem", {
                    grid: grid,
                    from: "center",
                    axis: "x",
                }),
            },
            {
                value: anime.stagger(".1rem", {
                    grid: grid,
                    from: "center",
                    axis: "x",
                }),
            },
        ],
        translateY: [
            {
                value: anime.stagger("-.1rem", {
                    grid: grid,
                    from: "center",
                    axis: "y",
                }),
            },
            {
                value: anime.stagger(".1rem", {
                    grid: grid,
                    from: "center",
                    axis: "y",
                }),
            },
        ],
        scale: 0.5,
        delay: anime.stagger(100, { grid: grid, from: "center" }),
    })
        .add({
            translateX: anime.stagger(".25rem", {
                grid: grid,
                from: "center",
                axis: "x",
            }),
            translateY: anime.stagger(".25rem", {
                grid: grid,
                from: "center",
                axis: "y",
            }),
            rotate: 0,
            scaleX: 2.5,
            scaleY: 0.25,
            delay: anime.stagger(4, { from: "center" }),
        })
        .add({
            rotate: anime.stagger([90, 0], { grid: grid, from: "center" }),
            delay: anime.stagger(50, { grid: grid, from: "center" }),
        })
        .add({
            translateX: 0,
            translateY: 0,
            scaleX: 1,
            scaleY: 1,
            rotate: 180,
            delay: anime.stagger(50, { grid: grid, from: "center" }),
        })
        .add(
            {
                targets: ".colored",
                background: ["#f27edd"],
                rotate: [0, 180],
                delay: anime.stagger(25, { grid: grid, from: "center" }),
            },
            "-=300"
        )
}