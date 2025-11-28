import { Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

interface FirstPlaceBadgeProps {
    className?: string
    showText?: boolean
}

export function FirstPlaceBadge({ className, showText = true }: FirstPlaceBadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold",
                "bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-950",
                "shadow-md border border-amber-300",
                "hover:shadow-lg transition-shadow duration-200",
                className,
            )}
        >
            <Trophy className="h-4 w-4" />
            {showText && <span>1<sup>ère</sup> Place</span>}
        </div>
    )
}
