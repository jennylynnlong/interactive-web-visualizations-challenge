// function that populates the metadata
function demoInfo(sample)
{
    // use d3.json in order to get data
    d3.json("samples.json").then((data) => {
        
        // grab metadata
        let metaData = data.metadata;
        
        // filter based on value of that one sample
        let result = metaData.filter(sampleResult => sampleResult.id == sample);
        
        // access index 0 from array
        let resultData = result[0];
                
        // clear the metadata out
        d3.select("#sample-metadata").html("");

        // use Object.entries to get value key pairs
        Object.entries(resultData).forEach(([key, value]) => {
            // add to the sample data/demographics section
            d3.select("#sample-metadata")
                .append("h5").text(`${key}: ${value}`);
        });
    });
}


// function that builds the graphs
function buildBarChart(sample)
{
    // use d3.json in order to get data
    d3.json("samples.json").then((data) => {
        
        // grab metadata
        let sampleData = data.samples;
                
        // filter based on value of that one sample
        let result = sampleData.filter(sampleResult => sampleResult.id == sample);
        
        // access index 0 from array
        let resultData = result[0];
        
        // get otu_ids, otu_labels, and sample_values
        let otu_ids = resultData.otu_ids;
        let otu_labels = resultData.otu_labels;
        let sample_values = resultData.sample_values;

        // build the bar chart
        let yticks = otu_ids.slice(0,10).map(id => `OTU ${id}`);
        let xValues = sample_values.slice(0,10);
        let textLabels = otu_labels.slice(0,10);
        
        let traceOTU = {
            y: yticks.reverse(),
            x: xValues.reverse(),
            text: textLabels.reverse(),
            type: "bar",
            orientation: "h"
        };

        let layout = {
            title: `Top 10 Belly Button Bacteria for Test Subject ${sample}`
        };

        // render plot to div tag with id "bar"
        Plotly.newPlot("bar", [traceOTU], layout);
    });
}

// function that builds bubble chart
function buildBubbleChart(sample)
{
    // use d3.json in order to get data
    d3.json("samples.json").then((data) => {
        
        // grab metadata
        let sampleData = data.samples;
                
        // filter based on value of that one sample
        let result = sampleData.filter(sampleResult => sampleResult.id == sample);
        
        // access index 0 from array
        let resultData = result[0];

        // get otu_ids, otu_labels, and sample_values
        let otu_ids = resultData.otu_ids;
        let otu_labels = resultData.otu_labels;
        let sample_values = resultData.sample_values;
        
        // build the bubble chart      
        let bubbleChart = {
            y: sample_values,
            x: otu_ids,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        let layout = {
            title: `Bacteria Cultures Per Sample for Test Subject ${sample}`,
            hovermode: "closest",
            xaxis: {title: "OTU ID"}
        };

        // render plot to div tag with id "bubble"
        Plotly.newPlot("bubble", [bubbleChart], layout);
    });

}

// function that builds gauge chart
function buildGaugeChart(sample)
{
    // use d3.json in order to get data
    d3.json("samples.json").then((data) => {
        
        // grab metadata
        let metaData = data.metadata;
        
        // filter based on value of that one sample
        let result = metaData.filter(sampleResult => sampleResult.id == sample);
        
        // access index 0 from array
        let resultData = result[0];
               
        // get washing frequencies
        let washings = resultData.wfreq;
        
        // build gauge chart
        let gaugeChart = [
            {
                domain: {x: [0,1], y:[0,1]},
                value: washings,
                title: { text: `<b>Belly Button Washing Frequency</b> <br> Scrubs per Week for Test Subject ${sample}`},
                type: "indicator",
                mode: "gauge+"

            }
        ];

        var layout = {
            margin: {t:0, b:0}
        };

        Plotly.newPlot("gauge", [gaugeChart], layout);

    });
}

/*
// function that builds gauge chart
function buildGaugeChart(sample)
{
    // use d3.json in order to get data
    d3.json("samples.json").then((data) => {
        
        // grab metadata
        let gaugeData = data.metadata;
                
        // filter based on value of that one sample
        let result = gaugeData.filter(sampleResult => sampleResult.id == sample);
        
        // access index 0 from array
        let resultData = result[0];
        //console.log(resultData);

        // get otu_ids, otu_labels, and sample_values
        //let metaValues = Object.values(resultData);
        //console.log(metaValues);

        // build the gauge chart

        
        let bubbleChart = {
            y: sample_values,
            x: otu_ids,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        };

        let layout = {
            title: `Bacteria Cultures Per Sample for Test Subject ${sample}`,
            hovermode: "closest",
            xaxis: {title: "OTU ID"}
        };

        // render plot to div tag with id "bubble"
        Plotly.newPlot("bubble", [bubbleChart], layout);
        
    });

}
*/

// function that initializes the dashboard
function initialize()
{

    // access dropdown from index.html file
    var select = d3.select("#selDataset");

    // use d3.json in order to get data
    d3.json("samples.json").then((data) => {
        
        // make array of just names/ids
        let sampleNames = data.names;
        
        // use foreach to create options for each sample
        sampleNames.forEach(sample => {
            select.append("option")
                .text(sample)
                .property("value", sample);
        });

        // pass in sample info when initialized
        let sample1 = sampleNames[0];

        // call function to build metadata
        demoInfo(sample1);
        // call function to build bar chart
        buildBarChart(sample1);
        // call function to build bubble chart
        buildBubbleChart(sample1);
        // call function to build gauge chart
        buildGaugeChart(sample1);
    });

}

// function that updates the dashboard
function optionChanged(item)
{
    // call update to the metadata
    demoInfo(item);
    // call function to build bar chart
    buildBarChart(item);
    // call function to build bubble chart
    buildBubbleChart(item);
    // call function to build gauge chart
    buildGaugeChart(item);
}

// call initialize function
initialize();