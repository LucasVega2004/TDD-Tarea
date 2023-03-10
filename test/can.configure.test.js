import { describe, expect, it } from "vitest";


const canConfigure = (from,to)=>{

    if(typeof from !== 'string') throw new Error('from is not a string')
    if(typeof to !== 'string') throw new Error('to is not a string')

    const isSameLength = from.length == to.length
    if(!isSameLength) return false

    const hasSameUniqueLetters = new Set(from).size == new Set(to).size
    if(!hasSameUniqueLetters) return false

    const transformations = {}

    for(let i = 0 ; i <from.length;i++){
        const fromLetter = from[i]
        const toLetter = to[i]


        const storedLetter = transformations[fromLetter]
        if(storedLetter && storedLetter != toLetter) return false
        transformations[fromLetter] = toLetter
    }

    return true
}

describe('can-configure',()=>{
  
    it('should throw if first parameter is missing',()=>{
        expect(() => canConfigure()).toThrow()
    })


    it('should throw if first parameter is not a string',()=>{
        expect(()=> canConfigure(2)).toThrow()
    })


    it('should throw if second parameter is missing',()=>{
        expect(()=> canConfigure('a')).toThrow()
    })


    it('should return a boolean',()=>{
        expect(canConfigure('a','b')).toBeTypeOf('boolean')
    })


    it('should return a false if strings provided have different length',()=>{
        expect(canConfigure('abc','de')).toBe(false)
    })


    it('should return false if strings provided have different length even with unique letters',()=>{
        expect(canConfigure('aab','ab')).toBe(false)
    })


    it('should return false if strings provided have different number of unique letters',()=>{
        expect(canConfigure('abc','ddd')).toBe(false)
    })


    it('should return false if strings has different order of transformation',()=>{
        expect(canConfigure('XBOX','XXBO')).toBe(false)
    })
})
