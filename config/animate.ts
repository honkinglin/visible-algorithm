import Clock from "@/animation/Clock"
import SelectSort from "@/animation/SelectSort"

export const animateCache = {
  animateId: 0,
};

export const animationMap: { [animation: string]: Function } = {
  Clock,
  SelectSort,
};