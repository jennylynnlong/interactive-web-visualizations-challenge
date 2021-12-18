// read in samples.json
var data = d3.json("samples.json");
console.log(data);

const obj = JSON.parse(data);

/*
// find ids
var idKeys = [];
for (var i =0; i<obj.names.length; i++)
{
    Object.values(obj.names[i]).forEach(function(key){
        if(idKeys.indexOf(key) == -1)
        {
            idKeys.push(key)
        }
    });
}
console.log(idKeys);
/*
// sort the data by sample_values in descending order
let sortedOTU = data.sort((entry1, entry2) => entry2.sample_values-entry1.sample_values);

// slice the first 10 objects for plotting
let slicedData = sortedOTU.slice(0, 10);

// reverse the array to accomodate Plotly's defaults
let reversed = slicedData.reverse();

// trace the OTU data
let traceOTU = {
    // use mapping for x (sample values) and y data (otu ids)
    x: reversed.map(otu => otu.sample_data),
    y: reversed.map(otu => otu.otu_ids),
    text: reversed.map(otu => otu.otu_labels),
    type: "bar",
    orientation: "h"
};

// data array
let plotData = [traceOTU];

// render plot to div tag with id "bar"
Plotly.newPlot("bar", plotData);

*/