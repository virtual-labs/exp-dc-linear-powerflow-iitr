// Global variables to store bus, line data, and Ybus matrix
let buses = [], lines = [], Y = [];

function generateBusTable() {
  var numBuses = parseInt(document.getElementById('numBuses').value);
  if (isNaN(numBuses) || numBuses <= 0) {
    alert("Please enter a valid number of Buses.");
    return;
  }

  var tableHtml = `
      <table>
          <tr>
              <th>Bus No.</th>
              <th>Bus Type</th>
              <th>Voltage (pu)</th>
              <th>Angle (degree)</th>
              <th>P<sub>gen</sub> (pu)</th>
              <th>P<sub>load</sub> (pu)</th>
          </tr>
  `;

  for (var i = 1; i <= numBuses; i++) {
      tableHtml += `
          <tr>
              <td>${i}</td>
              <td><input type="text" id="busType${i}" required></td>
              <td><input type="number" id="busV${i}" required></td>
              <td><input type="number" id="busAng${i}" required></td>
              <td><input type="text" id="busPg${i}" required></td>
              <td><input type="text" id="busPL${i}" required></td>
          </tr>
      `;
  }
  
  tableHtml += '</table>';
  document.getElementById('busTableContainer').innerHTML = tableHtml;
}

// Function to autofill bus data for a five-bus network
 function autofillFiveBusNetwork() {
  var numBuses = 5;
  document.getElementById('numBuses').value = numBuses; // Update input field
  generateBusTable(); // Regenerate table with updated number of buses

  // Autofill data into the table
  var defaultbusType = [1, 2, 2, 3, 3];
  var defaultbusV = [1, 1, 1, 1, 1];
  var defaultbusAng = [0, 0, 0, 0, 0];
  var defaultbusPg = [0, 0.5, 1.0, 0, 0];
  var defaultbusPL = [0, 0, 0, 1.15, 0.85];

  for (var i = 0; i < numBuses; i++) {
    document.getElementById(`busType${i+1}`).value = defaultbusType[i]; // Bus type
    document.getElementById(`busV${i+1}`).value = defaultbusV[i]; // Voltage (pu)
    document.getElementById(`busAng${i+1}`).value = defaultbusAng[i]; // Angle (degree)
    document.getElementById(`busPg${i+1}`).value = defaultbusPg[i]; // Pgen (pu)
    document.getElementById(`busPL${i+1}`).value = defaultbusPL[i]; // Pload (pu)
  }
}

// Function to autofill bus data for a five-bus network
function autofillFourteenBusNetwork() {
  var numBuses = 14;
  document.getElementById('numBuses').value = numBuses; // Update input field
  generateBusTable(); // Regenerate table with updated number of buses

  // Autofill data into the table
  var defaultbusType = [1, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3];
  var defaultbusV = [1.06, 1.045, 1, 1, 1, 1.07, 1, 1, 1, 1, 1, 1, 1, 1]; 
  var defaultbusAng = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var defaultbusPg = [0, 0.183, 0, 0, 0, 0.112, 0, 0, 0, 0, 0, 0, 0, 0];
  var defaultbusPL = [0, 0, 1.19, 0.4779, 0.07599, 0, 0, 0, 0.29499, 0.09, 0.03501, 0.06099, 0.135, 0.14901];  

  for (var i = 0; i < numBuses; i++) {
    document.getElementById(`busType${i+1}`).value = defaultbusType[i]; // Bus type
    document.getElementById(`busV${i+1}`).value = defaultbusV[i]; // Voltage (pu)
    document.getElementById(`busAng${i+1}`).value = defaultbusAng[i]; // Angle (degree)
    document.getElementById(`busPg${i+1}`).value = defaultbusPg[i]; // Pgen (pu)
    document.getElementById(`busPL${i+1}`).value = defaultbusPL[i]; // Pload (pu)    
  }
}

// Function to save bus data
function saveBusData() {
  buses = [];
  var numBuses = parseInt(document.getElementById('numBuses').value);
  for (var i = 0; i < numBuses; i++) {
    buses.push({
      V: parseFloat(document.getElementById(`busV${i+1}`).value),
      angle: parseFloat(document.getElementById(`busAng${i+1}`).value),
      Pg: parseFloat(document.getElementById(`busPg${i+1}`).value),
      PL: parseFloat(document.getElementById(`busPL${i+1}`).value),
      type: parseFloat(document.getElementById(`busType${i+1}`).value),
    });
  }
}

// Function to generate line data input table
function generateLineTable() {
  var numLines = parseInt(document.getElementById('numLines').value);
  if (isNaN(numLines) || numLines <= 0) {
    alert("Please enter a valid number of lines.");
    return;
  }

  var tableHtml = `
      <table>
          <tr>
              <th>Line No.</th>
              <th>From Bus</th>
              <th>To Bus</th>
              <th>X (pu)</th>
          </tr>
  `;

  for (var i = 1; i <= numLines; i++) {
      tableHtml += `
          <tr>
              <td>${i}</td>
              <td><input type="number" id="fromBus${i}" required></td>
              <td><input type="number" id="toBus${i}" required></td>
              <td><input type="text" id="X${i}" required></td>
          </tr>
      `;
  }
  
  tableHtml += '</table>';
  document.getElementById('lineTableContainer').innerHTML = tableHtml;
}

// Function to autofill line data for six lines
function autofillSixLines() {
  var numLines = 6;
  document.getElementById('numLines').value = numLines; // Update input field
  generateLineTable(); // Regenerate table with updated number of lines

  // Autofill line data into the table
  var defaultFromBus = [1, 1, 2, 3, 3, 4];
  var defaultToBus = [2, 5, 3, 4, 5, 5];
  var defaultX = [0.168, 0.126, 0.126, 0.136, 0.210, 0.252];
  

  for (var i = 0; i < numLines; i++) {
    document.getElementById(`fromBus${i+1}`).value = defaultFromBus[i];
    document.getElementById(`toBus${i+1}`).value = defaultToBus[i];
    document.getElementById(`X${i+1}`).value = defaultX[i];
  }
}

// Function to autofill line data for six lines
function autofillTwentyLines() {
  var numLines = 20;
  document.getElementById('numLines').value = numLines; // Update input field
  generateLineTable(); // Regenerate table with updated number of lines

  // Autofill data into the table
  var defaultFromBus = [1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 7, 7, 9, 9, 10, 12, 13];
  var defaultToBus = [2, 5, 3, 4, 5, 4, 5, 7, 9, 6, 11, 12, 13, 8, 9, 10, 14, 11, 13, 14];
  var defaultX = [0.0592, 0.223, 0.1979, 0.1763, 0.1738, 0.171, 0.0421, 0.209, 0.5562, 0.2522, 0.1989, 0.2557, 0.1302, 0.1762, 0.011, 0.0845, 0.2703, 0.192, 0.1999, 0.3479];


  for (var i = 0; i < numLines; i++) {
    document.getElementById(`fromBus${i+1}`).value = defaultFromBus[i];
    document.getElementById(`toBus${i+1}`).value = defaultToBus[i];
    document.getElementById(`X${i+1}`).value = defaultX[i];
  }
}

// Function to save line data
function saveLineData() {
  lines = [];
  var numLines = parseInt(document.getElementById('numLines').value);
  for (var i = 0; i < numLines; i++) {
    lines.push({
      from: parseInt(document.getElementById(`fromBus${i + 1}`).value),
      to: parseInt(document.getElementById(`toBus${i + 1}`).value),
      X: parseFloat(document.getElementById(`X${i + 1}`).value),
    });
  }
}

// Function to format complex numbers for display
function formatComplexNumber(complexNumber, decimals) {
  let real = parseFloat(complexNumber.re).toFixed(decimals);
  let imag = parseFloat(complexNumber.im).toFixed(decimals);
  return parseFloat(imag) >= 0 ? `${real} + ${imag}i` : `${real} - ${Math.abs(imag)}i`;
}

// Function to calculate the Ybus matrix
function calculateYbus() {
    saveBusData();
    saveLineData();

    var numBuses = buses.length;
    var numLines = lines.length;

    // Initialize Y matrix
    
    Bbus = Array.from({ length: numBuses }, () => Array.from({ length: numBuses }, () => math.complex(0, 0)));

    // Calculate line admittances and update Ybus
    for (var i = 0; i < numLines; i++) {
        var from = lines[i].from - 1; // Convert to zero-based index
        var to = lines[i].to - 1; // Convert to zero-based index
        var X = lines[i].X;
        // var tap = lines[i].Tap; // Tap changing transformer value, 1 if no transformer
        let tap = Array(lines.length).fill(1);
      
        var Badmittance = math.divide(1, X);

        var BshuntAdmittance = 0;
        if (tap > 0) {
            // Update Ybus matrix for tap-changing transformers
            var tapComplex = math.complex(tap, 0);
            var tapSquare = math.multiply(tapComplex, tapComplex);

            Bbus[from][to] = math.subtract(Bbus[from][to], math.multiply(Badmittance, tapComplex));
            Bbus[to][from] = Bbus[from][to]; // Symmetric matrix
            
            
            // For B-Bus (Used In DC Power Flow)
            var BfromAdmittance = math.add(
                math.multiply(Badmittance, tap),
                math.multiply(tap, math.subtract(tap, 1), Badmittance),
                BshuntAdmittance
            );

            var BtoAdmittance = math.add(
                math.multiply(Badmittance, tap),
                math.multiply(math.subtract(1, tap), Badmittance),
                BshuntAdmittance
            );

            Bbus[from][from] = math.add(Bbus[from][from], BfromAdmittance);
            Bbus[to][to] = math.add(Bbus[to][to], BtoAdmittance);

        } else {
            // Regular update without tap-changing transformers
            
            // For Bbus - 
            Bbus[from][to] = math.subtract(Bbus[from][to], Badmittance);
            Bbus[to][from] = Bbus[from][to]; // Symmetric matrix

            Bbus[from][from] = math.add(Bbus[from][from], Badmittance, BshuntAdmittance);
            Bbus[to][to] = math.add(Bbus[to][to], Badmittance, BshuntAdmittance);


        }
    }

    console.log("Bbus:", Bbus);
    displayYbusMatrix();
}


// Function to display the Ybus matrix
function displayYbusMatrix() {
  var tableHtml = '<table><tr><th></th>';
  for (var i = 0; i < Bbus.length; i++) {
      tableHtml += `<th>${i+1}</th>`;
  }
  tableHtml += '</tr>';
  for (var i = 0; i < Bbus.length; i++) {
      tableHtml += `<tr><th>${i+1}</th>`;
      for (var j = 0; j < Bbus[i].length; j++) {
        tableHtml += `<td>${math.re(Bbus[i][j]).toFixed(4)}</td>`;
      }
      tableHtml += '</tr>';
  }
  tableHtml += '</table>';
  document.getElementById('ybusContainer').innerHTML = tableHtml;
}

// }

// Function to run the power flow analysis Fast - DC (Linear Power Flow Method)
function runLoadFlow() {
  saveBusData();
  saveLineData();

  if (!buses.length || !lines.length) {
      alert('Please generate and fill in the bus and line tables first.');
      return;
  }


  var numBuses = buses.length;
  var numLines = lines.length;

let type = buses.map(bus => bus.type);
let Pg = buses.map(bus => bus.Pg);
let Qg = buses.map(bus => bus.Qg);
let Pd = buses.map(bus => bus.PL);
let Qd = buses.map(bus => bus.QL);
let Qmin = buses.map(bus => bus.Qmin);
let Qmax = buses.map(bus => bus.Qmax);
let Vmag = buses.map(bus => bus.V);
// let delta = buses.map(bus => bus.angle);
let delta = Array(numBuses).fill(0);

let P_sch = Pg.map((pg, i) => pg - Pd[i]);

let DP1 = math.subtract(
  P_sch.slice(1, numBuses), // Slice from 2 to numBuses (0-based index, so slice(1, numBuses) in JS)
  0  // Slice from 2 to numBuses
);

    console.log("Vmag:", Vmag);
    let Bp = math.zeros(numBuses, numBuses);

    // Calculate J1
      for (let i = 0; i < numBuses; i++) {
          for (let j = 0; j < numBuses; j++) {
            Bp.set([i, j], Bbus[i][j]);
          }
      }
        // Extract submatrix J11
      let pv_pq_indices = buses.map((bus, i) => bus.type !== 1 ? i : -1).filter(i => i !== -1);
      let Bdc = Bp.subset(math.index(pv_pq_indices, pv_pq_indices));
      console.log("Bdc :", Bdc);
    
      let Bdc_inv = math.inv(Bdc);
      console.log("Bdc_inv:", Bdc_inv);
      
      let DX = math.multiply(Bdc_inv, DP1);
      console.log("DX:", DX);

      // Convert the Math.js matrix DX into a simple JavaScript array (vector)
            let DX_vector = DX.toArray();
            let pvpqIndices = buses.map((bus, i) => bus.type !== 1 ? i : -1).filter(i => i !== -1);
      // Check and update delta values for PV and PQ buses
      pvpqIndices.forEach((i, idx) => {
          let dxValue = DX_vector[idx]; // Access the value from the converted vector
          if (delta[i] !== undefined && dxValue !== undefined && !isNaN(dxValue)) {
              delta[i] = math.add(delta[i], dxValue); // Safely update delta

          } else {
              console.error(`Error updating delta: Index ${i} or ${idx} out of bounds or invalid in delta or DX_vector`);
          }
      });
        console.log("Updated delta:", delta);
        let Va = buses.map((bus, i) => math.complex({ r: Vmag[i], phi: delta[i] }));
        console.log("V:", Va);

        console.log("Pd:", Pd);
        console.log("Delta:", delta);


          let PG = math.multiply(Bbus, delta);
          console.log("PG:", PG);

        buses.forEach((bus, i) => {
            if (bus.type === 1) {  // Slack bus
                bus.Pg = PG[i]-Pd[i];
        
            } else if (bus.type === 2) {  // PV bus
                bus.Pg = PG[i]-Pd[i];
        
            } else if (bus.type === 3) {  // PQ bus
                bus.Pg = 0;
            }
        });

       

          // Calculate line flows and losses
              // Initialize variables for line parameters

          let suceptancia = [];
          let y = [];
          let z = [];
          let tap = [];
          let FromNode = [];
          let ToNode = [];


          console.log("Pg:", Pg);

// Initialize defaultTap with the appropriate length
let defaultTap = Array(lines.length).fill(1);


console.log("defaultTap:", defaultTap);

// Populate line parameters for each line
lines.forEach((line, k) => {
    let b = 0;
    suceptancia.push(b);
    y.push(math.divide(1, math.complex(0, line.X)));
    z.push(math.complex(0, line.X));
    FromNode.push(line.from - 1); // Assuming zero-based indexing
    ToNode.push(line.to - 1);
});

console.log("tap:", tap);
console.log("y:", y);
console.log("z:", z);
console.log("suceptancia:", suceptancia);
console.log("FromNode:", FromNode);
console.log("ToNode:", ToNode);

// Calculate complex power flows Ss and Sr for each line
let Ss = lines.map((line, k) => {
    // Calculate Ss[k] for power flow from i to j
    let term1 = math.divide(
        math.subtract(Va[FromNode[k]], math.multiply(defaultTap[k], Va[ToNode[k]])),
        math.multiply(math.pow(math.abs(defaultTap[k]), 2), z[k])
    );
    console.log("term1:", term1);

    let term2 = math.multiply(Va[FromNode[k]], suceptancia[k]);
    console.log("term2:", term2);

    return math.multiply(Va[FromNode[k]], math.conj(math.add(term1, term2)));
});
console.log("Ss:", Ss);

let Sr = lines.map((line, k) => {
    // Calculate Sr[k] for power flow from j to i
    let term3 = math.divide(
        math.subtract(Va[ToNode[k]], Va[FromNode[k]]),
        math.multiply(defaultTap[k], z[k])
    );
    console.log("term3:", term3);

    let term4 = math.multiply(Va[ToNode[k]],     
        math.add(math.divide(math.subtract(defaultTap[k], 1), math.multiply(defaultTap[k], z[k])), suceptancia[k])          
    );
    console.log("term4:", term4);

    return math.multiply(Va[ToNode[k]], math.conj(math.add(term3, term4)));
});
console.log("Sr:", Sr);

// Calculate real and reactive power flows
let Pij = Ss.map(S => math.re(S));
let Pji = Sr.map(S => math.re(S));


// Calculate power losses
let P_loss = Pij.map((P, k) => P + Pji[k]);

// Calculate total power losses
let TotalP_loss = math.sum(P_loss.map(P => math.abs(P)));


// Display the results
displayResults(Vmag, delta, Pij, Pji, P_loss, lines, TotalP_loss);
                

}   // Load Flow function closed 

// Function to display the results
function displayResults(Vmag, delta, Pij, Pji, P_loss, lines, TotalP_loss) {
  

  // Display bus data
  let resultsHtml = `<table><tr><th>Bus No.</th><th>Voltage (pu)</th><th>Angle (degree)</th><th>P<sub>gen</sub> (pu)</th><th>P<sub>load</sub> (pu)</th></tr>`;

  Vmag.forEach((v, index) => {
      const bus = buses[index];
      const mag = math.abs(v).toFixed(4);
      const angle = ((delta[index]) * 180 / Math.PI).toFixed(4);
      resultsHtml += `<tr><td>${index + 1}</td><td>${mag}</td><td>${angle}</td><td>${bus.Pg.toFixed(4)}</td><td>${bus.PL.toFixed(4)}</td></tr>`;
  });
  
  resultsHtml += "</table>";

// Display line flows
  resultsHtml += `<h2>Line Flows</h2><table><tr><th>Line No.</th><th>From Bus</th><th>To Bus</th><th>P<sub>line(From-To)</sub> (pu)</th><th>P<sub>line(To-From)</sub> (pu)</th></th></tr>`;
lines.forEach((line, index) => {
    resultsHtml += `<tr><td>${index + 1}</td><td>${line.from}</td><td>${line.to}</td><td>${Pij[index].toFixed(4)}</td><td>${Pji[index].toFixed(4)}</td></tr>`;
});
resultsHtml += "</table>";
document.getElementById('loadFlowResults').innerHTML = resultsHtml;
}
