import React, {ComponentPropsWithoutRef, CSSProperties} from "react"

import {cn} from "@/lib/utils"

interface RippleProps extends Omit<ComponentPropsWithoutRef<"div">, "color"> {
    mainCircleSize?: number
    mainCircleOpacity?: number
    numCircles?: number
    color?: string | string[]
}

export const Ripple = React.memo(function Ripple({
                                                     mainCircleSize = 210,
                                                     mainCircleOpacity = 0.24,
                                                     numCircles = 8,
                                                     className,
                                                     color,
                                                     ...props
                                                 }: RippleProps) {
    return (<div
            className={cn("pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)] select-none", className)}
            {...props}
        >
            {Array.from({length: numCircles}, (_, i) => {
                const size = mainCircleSize + i * 70
                const opacity = mainCircleOpacity - i * 0.03
                const animationDelay = `${i * 0.06}s`
                const borderStyle = "solid"
                const borderColor = Array.isArray(color) ? color[i % color.length] : (color || `var(--foreground)`)

                return (<div
                        key={i}
                        className={cn("animate-ripple absolute rounded-full border shadow-xl")}
                        style={{
                            "--i": i,
                            width: `${size}px`,
                            height: `${size}px`,
                            opacity,
                            animationDelay,
                            borderStyle,
                            borderWidth: "1px",
                            borderColor,
                            backgroundColor: "rgba(214, 222, 217, 0.15)", // Very light green from --muted in globals.css
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%) scale(1)",
                        } as CSSProperties}
                    />)
            })}
        </div>)
})

Ripple.displayName = "Ripple"
