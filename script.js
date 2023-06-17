// Good Luck 💪🏾

function removeDuplicates(AK){
    return AK.filter((dupli, index)=>{
        return (AK.indexOf(dupli) === index);
    })
}console.log(removeDuplicates([4,7,6,27,4,7,27,2,9,8,1,8]));
console.log(removeDuplicates(["jamac", "Ayoub", "Ayoub"]));
console.log(removeDuplicates(["carab", "Ahmed", "Ahmed"]));