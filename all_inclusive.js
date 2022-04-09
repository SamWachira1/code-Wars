//  Input:

//  a string strng
// # an array of strings arr Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

//  a boolean true if all rotations of strng are included in arr (C returns 1)
//  false otherwise (C returns 0)

//  contain_all_rots(
//    "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

//  contain_all_rots(
//    "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

function containAllRots(strng, arr) {
  
  for(let i = 0; i < strng.length; i++) {
     if (arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1 ) {
       return false 
     }
  }
  
  return true 
}
