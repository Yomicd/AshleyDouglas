const numOfComplaints = document.getElementById('numOfComplaintsInput');
const numOfComplaints = document.get

const complaintResponse =


const complaintTemplate = (complaintTitle) =>
`
<div class="complaint">
    <div class="complaintTitle">  
        <h3>${ComplaintTitle}</h3>


        <button onlick="">What did the police do?</button>
    </div>

    <div class="complaintResponse">
        <h4>lalalalallalala</h4>

    </div>

</div>

`

const lookupComplaint  = (borough) =>{
    let boroughComplaints =[];
    console.log('loading complaints...')
    fetch('https://data.cityofnewyork.us/resource/erm2-nwe9.json')
    .then(resp => resp.json())
    .then(json =>{
        boroughComplaints= json.filter(jsonObject => jsonObject.borough ===borough)
        console.log(boroughComplaints);
    })
}