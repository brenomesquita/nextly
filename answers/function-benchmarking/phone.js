import Benchmark from 'benchmark';
import { binarySearch, linearSearch } from '../phone.js'

const suite = new Benchmark.Suite;

const sortedArray = [
  {
    "phone": "+55 (861) 462-3305",
    "name": "Adele Walker"
  },
  {
    "phone": "+55 (955) 489-2296",
    "name": "Breno Coleman"
  },
  {
    "phone": "+55 (998) 514-2697",
    "name": "Bachur Lindsey"
  },
  {
    "phone": "+55 (890) 566-3705",
    "name": "Celli Beasley"
  },
  {
    "phone": "+55 (989) 597-2576",
    "name": "Celli Beasley"
  },
  {
    "phone": "+55 (871) 406-2693",
    "name": "Celli Beasley"
  },
  {
    "phone": "+55 (990) 419-2217",
    "name": "Damara Mcdaniel"
  },
  {
    "phone": "+55 (818) 591-3120",
    "name": "Emmie Bullock"
  },
  {
    "phone": "+55 (885) 444-2448",
    "name": "Felsey Guerrero"
  },
  {
    "phone": "+55 (838) 532-3703",
    "name": "Felsey Guerrero"
  },
  {
    "phone": "+55 (987) 438-3340",
    "name": "Fitzgerald Nielsen"
  },
  {
    "phone": "+55 (802) 517-2076",
    "name": "Fowena Melton"
  },
  {
    "phone": "+55 (985) 423-3019",
    "name": "Gerena Buck"
  },
  {
    "phone": "+55 (969) 524-2614",
    "name": "Gobbie Pace"
  },
  {
    "phone": "+55 (857) 504-3137",
    "name": "Hita French"
  },
  {
    "phone": "+55 (899) 537-2436",
    "name": "Iotton Fields"
  },
  {
    "phone": "+55 (982) 507-2474",
    "name": "Joris Aguirre"
  },
  {
    "phone": "+55 (990) 418-2256",
    "name": "Juanita Barr"
  },
  {
    "phone": "+55 (977) 449-3833",
    "name": "Krake Lowery"
  },
  {
    "phone": "+55 (825) 442-2598",
    "name": "Lharity Maddox"
  },
  {
    "phone": "+55 (972) 545-3002",
    "name": "Lchroeder Allen"
  },
  {
    "phone": "+55 (876) 573-2622",
    "name": "Leed Young"
  },
  {
    "phone": "+55 (886) 464-3359",
    "name": "Llisa Landry"
  },
  {
    "phone": "+55 (953) 409-3802",
    "name": "Mueller Craft"
  },
  {
    "phone": "+55 (987) 495-3505",
    "name": "Marley Sharp"
  },
  {
    "phone": "+55 (997) 465-2314",
    "name": "Nercedes Patrick"
  },
  {
    "phone": "+55 (826) 515-3252",
    "name": "Nates Monroe"
  },
  {
    "phone": "+55 (826) 475-3950",
    "name": "Oillie Webster"
  },
  {
    "phone": "+55 (924) 590-2708",
    "name": "Psabelle Ingram"
  },
  {
    "phone": "+55 (971) 411-3314",
    "name": "Plevins Mcguire"
  },
  {
    "phone": "+55 (835) 437-3020",
    "name": "Qarmer Vance"
  }
];

suite
    .add("binarySearch", function() {
        binarySearch(sortedArray, "not found"),
        binarySearch(sortedArray, "Adele Walker"),
        binarySearch(sortedArray, "Breno Coleman"),
        binarySearch(sortedArray, "Bachur Lindsey"),
        binarySearch(sortedArray, "not found"),
        binarySearch(sortedArray, "Celli Beasley"),
        binarySearch(sortedArray, "Celli Beasley"),
        binarySearch(sortedArray, "Celli Beasley"),
        binarySearch(sortedArray, "not found"),
        binarySearch(sortedArray, "Damara Mcdaniel"),
        binarySearch(sortedArray, "Emmie Bullock"),
        binarySearch(sortedArray, "Felsey Guerrero"),
        binarySearch(sortedArray, "not found"),
        binarySearch(sortedArray, "Felsey Guerrero"),
        binarySearch(sortedArray, "Fitzgerald Nielsen")
    })
    .add("linearSearch", function() {
        linearSearch(sortedArray, "not found"),
        linearSearch(sortedArray, "Adele Walker"),
        linearSearch(sortedArray, "Breno Coleman"),
        linearSearch(sortedArray, "Bachur Lindsey"),
        linearSearch(sortedArray, "not found"),
        linearSearch(sortedArray, "Celli Beasley"),
        linearSearch(sortedArray, "Celli Beasley"),
        linearSearch(sortedArray, "Celli Beasley"),
        linearSearch(sortedArray, "not found"),
        linearSearch(sortedArray, "Damara Mcdaniel"),
        linearSearch(sortedArray, "Emmie Bullock"),
        linearSearch(sortedArray, "Felsey Guerrero"),
        linearSearch(sortedArray, "not found"),
        linearSearch(sortedArray, "Felsey Guerrero"),
        linearSearch(sortedArray, "Fitzgerald Nielsen")
    })
    .on("cycle", (event) => console.log(String(event.target)))
    .on("complete", function() {
        console.log(`fastest is ${this.filter('fastest').map('name')}`)
    });

export default suite;
