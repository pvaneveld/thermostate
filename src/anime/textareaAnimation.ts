export const textareaAnimation = (timeline) =>
    timeline
        .add({
            targets: ".textarea",
            background: "#f7d26a",
            scaleX: (1 / 35 / 1.5) * 2,
            scaleY: (1 / 10 / 1.5) * 2,
            duration: 1000,
        })
        .add({
            targets: ".textarea",
            opacity: 0,
            duration: 100,
        })
        .add(
            {
                opacity: 1,
                duration: 100,
            },
            "-=100"
        )
        .add({
            right: {
                value: ["0", "50%"],
                duration: 1000,
            },
            bottom: {
                value: ["0", "50%"],
                duration: 2000,
            },
            translateX: "50%",
            translateY: "50%",
        })
        .add(
            {
                rotate: {
                    value: "360",
                    duration: 500,
                },
            },
            "-=100"
        )
        .add({
            scaleX: 17.5 * 1.5,
            scaleY: 5 * 1.5,
        });