const util = require('util')

const json = { id: '222d3a20-7663-11e9-beef-9bc8da8a094a',
queue: 'dedup',
priority: 10,
job: 
 { name: 'JobEntryParseNew',
   label: 'Dedup/1 New entries',
   tag: 'Deduplicate',
   input: { partition: 1000, packet: 1, count: 1, total: 1 },
   output: { error: { 'Due to error, entry is moved to row state new-pending': { nb: 1, infos: [ [Object] ] } } },
   sessionId: null,
   ignore: [],
   created: '2019-05-14 16:12:56',
   updated: '2019-05-14 16:13:36',
   stats: 
    [ { uri: 'mysql://update/job/update-optimistic',
        code: 
         { '200': 
            { count: 2,
              durationSum: 0.106469457,
              durationMin: 0.030156288,
              durationMax: 0.076313169,
              durationAvg: 0.0532347285,
              reqBySecond: 18.784729971901708 } } },
      { uri: 'mysql://select/job/select-get-next-waiting',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.083429515,
              durationMin: 0.083429515,
              durationMax: 0.083429515,
              durationAvg: 0.083429515,
              reqBySecond: 11.986165807148705 } } },
      { uri: 'mysql://select/job/select-by-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.04751528,
              durationMin: 0.04751528,
              durationMax: 0.04751528,
              durationAvg: 0.04751528,
              reqBySecond: 21.045861457619527 } } },
      { uri: 'mysql://select/entry/select-by-id',
        code: 
         { '200': 
            { count: 2,
              durationSum: 4.881235307,
              durationMin: 0.317398916,
              durationMax: 4.563836391,
              durationAvg: 2.4406176535,
              reqBySecond: 0.4097323472875552 } } },
      { uri: 'mysql://select/entry_address/select-by-entry-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.330039792,
              durationMin: 0.330039792,
              durationMax: 0.330039792,
              durationAvg: 0.330039792,
              reqBySecond: 3.029937674909212 } } },
      { uri: 'mysql://select/entry_phone/select-by-entry-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.31694635,
              durationMin: 0.31694635,
              durationMax: 0.31694635,
              durationAvg: 0.31694635,
              reqBySecond: 3.155108112145794 } } },
      { uri: 'mysql://select/entry_source/select-by-entry-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.392249394,
              durationMin: 0.392249394,
              durationMax: 0.392249394,
              durationAvg: 0.392249394,
              reqBySecond: 2.5493984574517916 } } },
      { uri: 'mysql://select/entry_optin/select-by-entry-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.39745739,
              durationMin: 0.39745739,
              durationMax: 0.39745739,
              durationAvg: 0.39745739,
              reqBySecond: 2.51599297222779 } } },
      { uri: 'mysql://select/entry_activity/select-by-entry-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.528478208,
              durationMin: 0.528478208,
              durationMax: 0.528478208,
              durationAvg: 0.528478208,
              reqBySecond: 1.8922256109375848 } } },
      { uri: 'mysql://select/entry_preference/select-by-entry-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.576138449,
              durationMin: 0.576138449,
              durationMax: 0.576138449,
              durationAvg: 0.576138449,
              reqBySecond: 1.7356939147798482 } } },
      { uri: 'mysql://select/entry_personal_interest/select-by-entry-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.582660908,
              durationMin: 0.582660908,
              durationMax: 0.582660908,
              durationAvg: 0.582660908,
              reqBySecond: 1.7162641019328517 } } },
      { uri: 'mysql://select/entry_channel_pref/select-by-entry-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.58898033,
              durationMin: 0.58898033,
              durationMax: 0.58898033,
              durationAvg: 0.58898033,
              reqBySecond: 1.6978495699508334 } } },
      { uri: 'mysql://select/entry_com_type_pref/select-by-entry-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.595871614,
              durationMin: 0.595871614,
              durationMax: 0.595871614,
              durationAvg: 0.595871614,
              reqBySecond: 1.6782138576582706 } } },
      { uri: 'mysql://select/entry_local_attributes/select-by-entry-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.651456987,
              durationMin: 0.651456987,
              durationMax: 0.651456987,
              durationAvg: 0.651456987,
              reqBySecond: 1.5350207610867177 } } },
      { uri: 'mysql://select/entry_b2b/select-by-entry-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.651842741,
              durationMin: 0.651842741,
              durationMax: 0.651842741,
              durationAvg: 0.651842741,
              reqBySecond: 1.5341123511874777 } } },
      { uri: 'mysql://select/entry_b2e/select-by-entry-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.645670917,
              durationMin: 0.645670917,
              durationMax: 0.645670917,
              durationAvg: 0.645670917,
              reqBySecond: 1.5487765883065165 } } },
      { uri: 'mysql://select/entry_identifier/select-by-entry-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.644779979,
              durationMin: 0.644779979,
              durationMax: 0.644779979,
              durationAvg: 0.644779979,
              reqBySecond: 1.5509166422178875 } } },
      { uri: 'mysql://select/entry_perimeter/select-by-row-id',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.645687424,
              durationMin: 0.645687424,
              durationMax: 0.645687424,
              durationAvg: 0.645687424,
              reqBySecond: 1.5487369938306248 } } },
      { uri: 'mysql://relation/get-document/entry',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.879531892,
              durationMin: 0.879531892,
              durationMax: 0.879531892,
              durationAvg: 0.879531892,
              reqBySecond: 1.1369684363872958 } } },
      { uri: 'swagger://get/Country#apiModuleCdbReferentialCountryListGet',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.093653565,
              durationMin: 0.093653565,
              durationMax: 0.093653565,
              durationAvg: 0.093653565,
              reqBySecond: 10.67765012469093 } } },
      { uri: 'swagger://get/Retention#apiModuleCdbReferentialRetentionListGet',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.022176663,
              durationMin: 0.022176663,
              durationMax: 0.022176663,
              durationAvg: 0.022176663,
              reqBySecond: 45.09244695651461 } } },
      { uri: 'mysql://insert/entry_perimeter/insert',
        code: 
         { '200': 
            { count: 1,
              durationSum: 0.076918871,
              durationMin: 0.076918871,
              durationMax: 0.076918871,
              durationAvg: 0.076918871,
              reqBySecond: 13.000710839866592 } } } ] },
exec: 
 { state: 'ko',
   tried: 1,
   retry: 1,
   code: 500,
   log: 'No entry parsed correctly with row state new on a total of 1. 1 extra message. 1 time: Due to error, entry is moved to row state new-pending.',
   err: null,
   dateAdd: '2019-05-14T16:12:56.000Z',
   dateStart: '2019-05-14T16:13:36.558Z',
   dateEnd: null,
   duration: 0,
   cancelable: 300,
   callback: undefined },
requester: 
 { id: '9a773f92-a80c-11e7-ae0c-000c2901abd1',
   email: 'No email',
   lastname: 'worker-cdb-scheduler',
   firstname: 'worker-cdb-scheduler' },
etag: 2 }

let parsed;

try {
    parsed = JSON.parse(JSON.stringify(json))
    console.log('parse')
}
catch (e) {
    console.log(util.inspect(json, { depth: 5, maxArrayLength: 20 }))
    parsed = JSON.parse(util.inspect(json, { depth: 5, maxArrayLength: 20 }))
}

console.log(parsed.job.output)
