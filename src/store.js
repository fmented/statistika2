import {writable} from 'svelte/store'
import { T } from "./t.table";
export const INPUTDATA = writable({})
export const STATEMENT = writable({})
export const MUTATOR = writable(0)
export const CALCULATED = writable(0)
export const RESULT = writable({})
export const CHART = writable([])
export const FORMULA = {
    correlation(n, sum_x, sum_y, sum_x2, sum_y2, sum_xy, precision=4 ){
        let c = (n*sum_xy - sum_x*sum_y) /(Math.sqrt((n*sum_x2-sum_x**2)*(n*sum_y2-sum_y**2)))
        return this.round(c, precision)
    },
    sum(arr){
        return arr.reduce((a, b) => a+b, 0)
    },
    kd(r, precision=4){
        return this.round(r**2*100, precision)
    },
    t_count(r, n, precision=4){
        let t = (r* Math.sqrt(n-2)) / (Math.sqrt(1-r**2))
        return this.round(t, precision)
    },
    round(n, precision=4){
        if(precision==0) return Math.round(n)
        let p = 10**precision
        return Math.round(n*p)/p
    },
    t_table(n, p, precision=4){
        return this.round(T.find(n-2, p), precision)
    },
    reg_b(n, sum_x, sum_y, sum_x2, sum_xy, precision=4){
        let b = (n*sum_xy-sum_x*sum_y)/(n*sum_x2-sum_x**2)
        return this.round(b, precision)
    },
    reg_a(n, b, sum_x, sum_y, precision=4){
        return this.round((sum_y-b*sum_x)/n, precision)
    },
    regression(a, b, x){
        return x.map(v=>a+b*v);
    }
}