const sumAll = function(start, end) {
    if(!Number.isInteger(start) || !Number.isInteger(end))
    {
        return "ERROR";
    }
    if(start <0 || end<0)
    {
        return "ERROR";
    }
    if(start>end)
    {
        const temp = start;
        start = end;
        end = temp;
    }
    let sum = 0;
while(start<=end)
{
    sum+=start;
    start++;
}
return sum
};

// Do not edit below this line
module.exports = sumAll;
