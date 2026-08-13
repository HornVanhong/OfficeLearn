import { OfficeModule, Lesson, ShortcutItem, PracticeChallenge, Badge, QuizQuestion } from "./types";

export const khmerModulesMap: Record<string, Partial<OfficeModule>> = {
  "office-basics": {
    title: "មូលដ្ឋានគ្រឹះ Office",
    subtitle: "គំនិតគ្រឹះនៃ Ribbon និង Cloud",
    description: "រៀនពីរបៀបប្រើប្រាស់ Navigation ការរក្សាទុកឯកសារ ការសមកាលកម្ម OneDrive និងរបារ Ribbon នៃ Microsoft 365។",
  },
  word: {
    title: "Microsoft Word",
    subtitle: "ការកែសម្រួល និងរចនាឯកសារ",
    description: "រៀនកែប្រែទម្រង់អត្ថបទ តម្រឹមឃ្លា បញ្ជីចំណុច ភ្នែកក្រឡាតារាង និងការរៀបចំលិខិតផ្លូវការ។",
  },
  excel: {
    title: "Microsoft Excel",
    subtitle: "សៀវភៅបញ្ជី និងការវិភាគទិន្នន័យ",
    description: "ស្ទាត់ជំនាញលើក្រឡាសៀវភៅបញ្ជី ការគណនារូបមន្ត (=SUM, =AVERAGE) ក្រាហ្វិក និងការកែប្រែទិន្នន័យ។",
  },
  powerpoint: {
    title: "Microsoft PowerPoint",
    subtitle: "ការធ្វើបទបង្ហាញ និងការរចនា",
    description: "បង្កើតស្លាយបទបង្ហាញដ៏ទាក់ទាញ ជាមួយប្រអប់អត្ថបទ រូបភាព ប្រធានបទរចនា និងបែបផែនផ្លាស់ប្តូរ។",
  },
  outlook: {
    title: "Microsoft Outlook",
    subtitle: "អ៊ីមែល និងកាលវិភាគ",
    description: "រៀបចំសារប្រអប់សំបុត្រ រៀបចំការប្រជុំក្នុងកាលវិភាគ និងកំណត់វិធានការតម្រៀបអ៊ីមែលស្វ័យប្រវត្តិ។",
  },
  access: {
    title: "Microsoft Access",
    subtitle: "ការគ្រប់គ្រងមូលដ្ឋានទិន្នន័យ",
    description: "យល់ដឹងពីតារាងមូលដ្ឋានទិន្នន័យ Primary Keys កំណត់ត្រា និងសំណួរ Query។",
  },
  onenote: {
    title: "Microsoft OneNote",
    subtitle: "សៀវភៅកត់ត្រាឌីជីថល",
    description: "រៀបចំកំណត់ត្រាផ្ទាល់ខ្លួន និងក្រុមតាមរយៈសៀវភៅកត់ត្រា ផ្នែក និងទំព័រ។",
  },
  teams: {
    title: "Microsoft Teams",
    subtitle: "ការសហការក្រុម និងការហៅវីដេអូ",
    description: "សហការគ្នាយ៉ាងមានប្រសិទ្ធភាពតាមរយៈការសន្ទនាក្នុង Channel ការចែករំលែកឯកសារ និងការហៅវីដេអូ។",
  },
};

export const khmerLessonsMap: Record<string, Partial<Lesson>> = {
  "office-basics-101": {
    title: "ចំណុចប្រទាក់ Microsoft 365 & Ribbon",
    description: "យល់ដឹងពីផ្ទាំងប៊ូតុង បញ្ជា របារឧបករណ៍ និងការរក្សាទុកស្វ័យប្រវត្តិ Cloud ក្នុងកម្មវិធី Office។",
    objectives: [
      "យល់ដឹងពីប្លង់ Ribbon រួមគ្នារវាង Word, Excel និង PowerPoint",
      "ប្រើប្រាស់ Quick Access Toolbar និងប្រអប់ស្វែងរក",
      "បើកដំណើរការ AutoSave សម្រាប់ OneDrive cloud storage",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "ការរចនា Ribbon ឯកភាព",
        content: "គ្រប់កម្មវិធី Microsoft 365 ទាំងអស់ប្រើប្រាស់ការរចនា Ribbon ស្តង់ដារដែលចែកចេញជា Tabs (Home, Insert, Layout), Groups, និង Commands។",
        type: "text",
      },
    ],
    quiz: [
      {
        id: "q-ob101-1",
        type: "multiple-choice",
        question: "តើអ្វីជាមុខងារចម្បងនៃ Quick Access Toolbar ផ្នែកខាងលើនៃកម្មវិធី Office?",
        options: [
          "វាផ្ទុកប៊ូតុងបញ្ជាប្រើប្រាស់ញឹកញាប់ដូចជា Save, Undo, និង Redo ដោយចុចតែម្តង",
          "វាស្វែងរកអ៊ីនធឺណិត",
          "វាពិនិត្យថ្មម៉ាស៊ីន",
          "វាចាក់សោអេក្រង់",
        ],
        correctAnswer: 0,
        explanation: "Quick Access Toolbar ជួយឱ្យប៊ូតុងបញ្ជាសំខាន់ៗអាចចុចបានភ្លាមៗ ទោះបីជាអ្នកនៅលើ Ribbon Tab ណាក៏ដោយ។",
      },
    ],
  },
  "office-basics-102": {
    title: "ការផ្ទុកទិន្នន័យ Cloud, AutoSave & Export ឯកសារ PDF",
    description: "កំណត់ការបម្រុងទុក OneDrive, បើក AutoSave real-time និងនាំចេញឯកសារជា PDF។",
    objectives: [
      "បើក AutoSave សម្រាប់ឯកសារ OneDrive",
      "នាំចេញឯកសារ Word និង Excel ជា PDF",
      "គ្រប់គ្រងការរក្សាទុកឯកសារក្នុងម៉ាស៊ីន និងលើ Cloud",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "ការរក្សាទុកស្វ័យប្រវត្តិ Cloud & សុវត្ថិភាព",
        content: "នៅពេលឯកសារត្រូវរក្សាទុកលើ OneDrive មុខងារ AutoSave នឹងរក្សាទុកការកែប្រែជារៀងរាល់ប៉ុន្មានវិនាទីម្តងដោយស្វ័យប្រវត្តិ។",
        type: "text",
      },
    ],
    quiz: [
      {
        id: "q-ob102-1",
        type: "multiple-choice",
        question: "តើលក្ខខណ្ឌអ្វីដែលចាំបាច់ដើម្បីឱ្យ AutoSave ដំណើរការក្នុង Microsoft 365?",
        options: [
          "ឯកសារត្រូវតែរក្សាទុកនៅលើ Cloud storage ដូចជា OneDrive ឬ SharePoint",
          "កុំព្យូទ័រត្រូវតែដោតសាកថ្ម",
          "ឯកសារត្រូវតែរក្សាទុកជា .txt",
          "ឯកសារត្រូវតែមានយ៉ាងតិច ១០០ ទំព័រ",
        ],
        correctAnswer: 0,
        explanation: "AutoSave អាស្រ័យលើការសមកាលកម្ម version លើ Cloud តាមរយៈ OneDrive ឬ SharePoint។",
      },
    ],
  },
  "office-basics-103": {
    title: "ការសហការរៀបចំឯកសារ Real-time & ប្រវត្តិ Version History Pro",
    description: "ធ្វើការរួមគ្នាជាមួយសមាជិកក្រុមក្នុងពេលតែមួយ និងស្តារប្រវត្តិឯកសារចាស់ឡើងវិញ។",
    objectives: [
      "ចែករំលែកតំណភ្ជាប់ឯកសារ Cloud ជាមួយសិទ្ធិមើល ឬកែប្រែ",
      "សហការកែប្រែឯកសារក្នុងពេលតែមួយជាមួយសមាជិកក្រុម",
      "ពិនិត្យ និងស្តារ Version History ចាស់ៗ",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "ការសហការកែប្រែ Real-time ជាមួយក្រុម",
        content: "អ្នកប្រើប្រាស់ច្រើននាក់អាចកែប្រែឯកសារ Word ឬ Excel តែមួយក្នុងពេលតែមួយ ដោយមានសញ្ញា cursor ពណ៌បង្ហាញការកែប្រែជាក់ស្តែង។",
        type: "text",
      },
    ],
    quiz: [
      {
        id: "q-ob103-1",
        type: "multiple-choice",
        question: "ប្រសិនបើសមាជិកក្រុមលុបកថាខណ្ឌដោយអចេតនាក្នុងឯកសារ Cloud តើអ្នកអាចយកវាមកវិញយ៉ាងដូចម្តេច?",
        options: [
          "ចូលទៅ File -> Info -> Version History ហើយស្តារ version ចាស់ឡើងវិញ",
          "ដំឡើង Microsoft Office ឡើងវិញ",
          "កំណត់ម៉ាស៊ីនឡើងវិញ (Format)",
          "បង្កើតឯកសារថ្មីពីដំបូង",
        ],
        correctAnswer: 0,
        explanation: "Version History រក្សាទុកប្រវត្តិឯកសារ Cloud ទាំងអស់ ដែលអនុញ្ញាតឱ្យស្តារត្រឡប់ទៅ version មុនៗបានយ៉ាងងាយស្រួល។",
      },
    ],
  },
  "word-103": {
    title: "Styles & ការបង្កើតមាតិកាស្វ័យប្រវត្តិ Table of Contents",
    description: "អនុវត្តរចនាប័ទ្ម Heading 1 និង Heading 2 ដើម្បីបង្កើតបញ្ជីមាតិកាឯកសារដោយស្វ័យប្រវត្តិ។",
    objectives: [
      "អនុវត្តរចនាប័ទ្ម Heading លើផ្នែកនីមួយៗនៃឯកសារ",
      "បង្កើតបញ្ជីមាតិកា Table of Contents ដោយស្វ័យប្រវត្តិ",
      "កំណត់ពណ៌ និងឋានានុក្រមអក្សរក្បាល",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "ឋានានុក្រមចំណងជើង & ការរៀបចំរចនាសម្ព័ន្ធ",
        content: "ការប្រើប្រាស់ Headings បង្កើតរចនាសម្ព័ន្ធឯកសារក្នុង Word។ Heading 1 ប្រើសម្រាប់ជំពូកធំ ហើយ Heading 2 សម្រាប់ប្រធានបទរង។",
        type: "text",
      },
    ],
    quiz: [
      {
        id: "q-w103-1",
        type: "multiple-choice",
        question: "តើការប្រើប្រាស់ Heading Styles ផ្តល់អត្ថប្រយោជន៍ចម្បងអ្វីខ្លះប្រៀបធៀបនឹងការប្តូរទំហំអក្សរដោយដៃ?",
        options: [
          "វាអនុញ្ញាតឱ្យបង្កើតបញ្ជីមាតិកា Table of Contents ដោយស្វ័យប្រវត្តិ និងតំណផ្លូវកាត់ក្នុង Navigation Pane",
          "វាបង្រួមទំហំឯកសារ ៥០%",
          "វាបង្ខំឱ្យព្រីនជាពណ៌ស្វ័យប្រវត្តិ",
          "វាបកប្រែអត្ថបទអង់គ្លេសទៅខ្មែរដោយស្វ័យប្រវត្តិ",
        ],
        correctAnswer: 0,
        explanation: "Heading styles បង្កើតរចនាសម្ព័ន្ធន័យវិទ្យា អនុញ្ញាតឱ្យ Word បង្កើត Table of Contents ដោយស្វ័យប្រវត្តិ។",
      },
    ],
  },
  "word-104": {
    title: "Mail Merge, Track Changes & ការបង្កើតស្វ័យប្រវត្តិ Macro Pro",
    description: "ស្ទាត់ជំនាញការបង្កើតលិខិតផ្លូវការច្រើនក្នុងពេលតែមួយ (Mail Merge) និងការតាមដានការកែប្រែ Track Changes។",
    objectives: [
      "អនុវត្ត Mail Merge ជាមួយបញ្ជីទិន្នន័យ Excel",
      "ប្រើប្រាស់ Track Changes និង Comments សម្រាប់ការពិនិត្យឯកសារក្រុម",
      "ការពារឯកសារដោយប្រើប្រាស់លេខកូដសម្ងាត់",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "លំហាត់ការងារ Mail Merge",
        content: "Mail Merge ផ្សំគំរូលិខិតជាមួយទិន្នន័យក្នុង Excel ដើម្បីបង្កើតលិខិត ប័ណ្ណសរសើរ ឬវិក្កយបត្រផ្ទាល់ខ្លួនរាប់រយក្នុងពេលតែមួយ។",
        type: "text",
      },
    ],
    quiz: [
      {
        id: "q-w104-1",
        type: "multiple-choice",
        question: "តើ Ribbon Tab មួយណាដែលមានឧបករណ៍តភ្ជាប់បញ្ជី Excel សម្រាប់បង្កើតលិខិតផ្ទាល់ខ្លួនច្រើន?",
        options: ["Mailings Tab", "Review Tab", "Developer Tab", "References Tab"],
        correctAnswer: 0,
        explanation: "Mailings Tab ផ្ទុក Mail Merge Wizard សម្រាប់ភ្ជាប់បញ្ជីអ្នកទទួលពី Excel។",
      },
    ],
  },
  "excel-103": {
    title: "អនុមុខតក្កវិជ្ជា & ការស្វែងរកទិន្នន័យ (=IF, =VLOOKUP, =XLOOKUP)",
    description: "ស្ទាត់ជំនាញការធ្វើសេចក្តីសម្រេចចិត្តតាមលក្ខខណ្ឌ (=IF) និងការស្វែងរកទិន្នន័យ (=VLOOKUP, =XLOOKUP)។",
    objectives: [
      "បង្កើតលក្ខខណ្ឌតក្កវិជ្ជាដោយប្រើ =IF(test, true_val, false_val)",
      "ស្វែងរកទិន្នន័យក្នុងតារាងយោងដោយប្រើ =VLOOKUP",
      "ប្រើប្រាស់ =XLOOKUP ទំនើបសម្រាប់ការស្វែងរកទិន្នន័យគ្រប់ទិសដៅ",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "ការស្វែងរក & ស្វ័យប្រវត្តិកម្មតក្កវិជ្ជា",
        content: "=VLOOKUP និង =XLOOKUP ស្វែងរកលេខកូដផលិតផល ឬបុគ្គលិកក្នុងតារាងធំ ហើយទាញយកតម្លៃ ឬប្រាក់ខែដែលត្រូវគ្នាមកបង្ហាញដោយស្វ័យប្រវត្តិ។",
        type: "text",
      },
    ],
    quiz: [
      {
        id: "q-e103-1",
        type: "multiple-choice",
        question: "តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃ =XLOOKUP ទំនើបប្រៀបធៀបនឹង =VLOOKUP ចាស់?",
        options: [
          "=XLOOKUP អាចស្វែងរកទិន្នន័យទាំងខាងឆ្វេង និងខាងស្តាំ ដោយមិនបាច់កំណត់លេខរៀងជួរឈរឡើយ",
          "=XLOOKUP ដំណើរការតែលើលេខប៉ុណ្ណោះ",
          "=XLOOKUP កំណត់ពណ៌ក្រឡាជាពណ៌បៃតងស្វ័យប្រវត្តិ",
          "=XLOOKUP លុបជួរដេកស្ទួនដោយស្វ័យប្រវត្តិ",
        ],
        correctAnswer: 0,
        explanation: "=XLOOKUP មានភាពបត់បែន អាចស្វែងរកទិន្នន័យគ្រប់ទិសដៅដោយមិនបាច់រាប់លេខរៀងជួរឈរ។",
      },
    ],
  },
  "excel-104": {
    title: "PivotTables, Data Validation & ស្វ័យប្រវត្តិកម្ម VBA Macro Pro",
    description: "បង្កើតតារាងសង្ខេបទិន្នន័យ PivotTables កំណត់បញ្ជីជ្រើសរើស Data Validation និងសរសេរ VBA Macros។",
    objectives: [
      "បង្កើត PivotTables អន្តរកម្មដើម្បីសង្ខេបទិន្នន័យធំៗ",
      "អនុវត្តបញ្ជីជ្រើសរើស Data Validation ក្នុងក្រឡា",
      "កត់ត្រា និងកែសម្រួល VBA Macros",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "ការសង្ខេបទិន្នន័យជាមួយ PivotTables",
        content: "PivotTables បង្រួមទិន្នន័យរាប់ពាន់ជួរដេកមកជាតារាងសង្ខេបស្អាត ជាមួយតម្រង និងក្រាហ្វិកអន្តរកម្ម។",
        type: "text",
      },
    ],
    quiz: [
      {
        id: "q-e104-1",
        type: "multiple-choice",
        question: "តើឧបករណ៍មួយណាក្នុង Excel ដែលអនុញ្ញាតឱ្យកំណត់បញ្ជីជ្រើសរើស (Dropdown List) ក្នុងក្រឡា?",
        options: ["Data Validation", "Conditional Formatting", "Goal Seek", "AutoFilter"],
        correctAnswer: 0,
        explanation: "Data Validation កំណត់លក្ខខណ្ឌបញ្ចូលទិន្នន័យ និងបង្កើតបញ្ជីជ្រើសរើស (Dropdown menu) ក្នុងក្រឡា។",
      },
    ],
  },
  "powerpoint-103": {
    title: "Slide Master, Custom Motion & បទបង្ហាញ Presenter View Pro",
    description: "ស្ទាត់ជំនាញការរចនាគំរូ Slide Master បែបផែនចលនា Custom Motion និងការបង្ហាញលើអេក្រង់ពីរ Presenter View។",
    objectives: [
      "កំណត់ប្លង់រួមតាមរយៈ Slide Master view",
      "បង្កើតចលនាផ្លាស់ទីតាមផ្លូវ Custom Motion paths",
      "ប្រើប្រាស់ Presenter View ជាមួយកំណត់កត់សម្គាល់ផ្ទាល់ខ្លួន",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "Slide Master & ម៉ាកសញ្ញាក្រុមហ៊ុន Pro",
        content: "Slide Master អនុញ្ញាតឱ្យអ្នកដាក់រូបសញ្ញាក្រុមហ៊ុន (Logo) ក្បាលទំព័រ ឬពណ៌ចម្បងតែម្តង ហើយវាបង្ហាញលើគ្រប់ស្លាយទាំងអស់ដោយស្វ័យប្រវត្តិ។",
        type: "text",
      },
    ],
    quiz: [
      {
        id: "q-p103-1",
        type: "multiple-choice",
        question: "តើអ្នកគួរបញ្ចូលរូបសញ្ញាក្រុមហ៊ុន (Logo) នៅឯណាដើម្បីឱ្យវាបង្ហាញលើគ្រប់ស្លាយទាំងអស់ដោយស្វ័យប្រវត្តិ?",
        options: ["View Tab -> Slide Master", "Insert Tab -> Shapes", "Design Tab -> Background", "File Tab -> Options"],
        correctAnswer: 0,
        explanation: "ការកែសម្រួលលើ Slide Master នឹងធ្វើបច្ចុប្បន្នភាពលើគ្រប់ប្លង់ស្លាយទាំងអស់ក្នុងបទបង្ហាញ។",
      },
    ],
  },
  "basics-101": {
    title: "ចំណុចប្រទាក់ Microsoft 365 & Ribbon",
    description: "យល់ដឹងពីផ្ទាំងប៊ូតុង បញ្ជា របារឧបករណ៍ និងការរក្សាទុកស្វ័យប្រវត្តិ Cloud ក្នុងកម្មវិធី Office។",
    objectives: [
      "យល់ដឹងពីប្លង់ Ribbon រួមគ្នារវាង Word, Excel និង PowerPoint",
      "ប្រើប្រាស់ Quick Access Toolbar និងប្រអប់ស្វែងរក",
      "បើកដំណើរការ AutoSave សម្រាប់ OneDrive cloud storage",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "ការរចនា Ribbon ឯកភាព",
        content: "គ្រប់កម្មវិធី Microsoft 365 ទាំងអស់ប្រើប្រាស់ការរចនា Ribbon ស្តង់ដារដែលចែកចេញជា Tabs (Home, Insert, Layout), Groups, និង Commands។",
        type: "text",
      },
    ],
    quiz: [
      {
        id: "q-b101-1",
        type: "multiple-choice",
        question: "តើអ្វីជាអត្ថប្រយោជន៍ចម្បងនៃការបើក AutoSave ក្នុង Microsoft 365?",
        options: [
          "ការកែប្រែទាំងអស់ត្រូវរក្សាទុកជាបន្តបន្ទាប់ក្នុង real-time ទៅកាន់ OneDrive",
          "វាការពារឯកសារដោយលេខកូដស្វ័យប្រវត្តិ",
          "វាកាត់បន្ថយទំហំរូបភាព ៩០%",
          "វាផ្ញើអ៊ីមែលឯកសារទៅប្រធានរបស់អ្នកដោយស្វ័យប្រវត្តិ",
        ],
        correctAnswer: 0,
        explanation: "AutoSave រក្សាទុកការកែប្រែរបស់អ្នកជាបន្តបន្ទាប់ទៅ OneDrive ឬ SharePoint ដូច្នេះអ្នកមិនដែលបាត់បង់ការងារឡើយ។",
      },
    ],
  },
  "word-101": {
    title: "ការកែប្រែទម្រង់អត្ថបទក្នុង Word",
    description: "រៀនកំណត់ទម្រង់អត្ថបទ ប្រើប្រាស់ Bold, Italic, Underline និងតម្រឹមឃ្លាក្នុងឯកសារ។",
    objectives: [
      "ស្គាល់ឧបករណ៍កែប្រែទម្រង់អត្ថបទលើ Ribbon",
      "អនុវត្តការកំណត់ Bold, Italic, និង Underline",
      "ផ្លាស់ប្តូរការតម្រឹមឃ្លា (ឆ្វេង, កណ្តាល, ស្ដាំ)",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "សូមស្វាគមន៍មកកាន់ការកែទម្រង់ Word",
        content: "Microsoft Word មានរបារ Ribbon នៅផ្នែកខាងលើ។ ផ្ទាំង Home មានក្រុម Font ដែលមានឧបករណ៍ styling អត្ថបទដូចជា Bold (B), Italic (I), និង Underline (U)។",
        type: "text",
      },
      {
        stepNumber: 2,
        title: "ការប្រកួតប្រជែង៖ ធ្វើឱ្យអត្ថបទដិត (Bold)",
        content: "ប្រើប្រាស់កម្មវិធីត្រាប់តាម Word ខាងក្រោម។ ចុចប៊ូតុង Bold (B) លើ Ribbon ដើម្បីធ្វើឱ្យអត្ថបទដិត!",
        type: "sim-challenge",
        hint: "ស្វែងរកប៊ូតុង B ក្នុងផ្នែក Font លើផ្ទាំង Home Ribbon។",
      },
      {
        stepNumber: 3,
        title: "ការប្រកួតប្រជែង៖ តម្រឹមអត្ថបទនៅកណ្តាល (Center)",
        content: "ចំណងជើងមើលទៅស្អាតបំផុតនៅពេលតម្រឹមចំកណ្តាលទំព័រ។ ចុចប៊ូតុង Center Alignment ក្នុងផ្នែក Paragraph។",
        type: "sim-challenge",
        hint: "ចុចរូបតំណាងតម្រឹមចំកណ្តាល (បន្ទាត់នៅកណ្តាល) ក្នុងផ្នែក Paragraph។",
      },
    ],
    quiz: [
      {
        id: "q-w101-1",
        type: "multiple-choice",
        question: "តើផ្លូវកាត់ក្តារចុចមួយណាដែលកំណត់ទម្រង់អត្ថបទដិត (Bold) ក្នុង Microsoft Word?",
        options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + Shift + B"],
        correctAnswer: 0,
        explanation: "Ctrl + B គឺជាផ្លូវកាត់ស្តង់ដារសកលសម្រាប់កំណត់ទម្រង់អត្ថបទដិត (Bold) ក្នុង Microsoft Word។",
      },
      {
        id: "q-w101-2",
        type: "click-ribbon",
        question: "តើឧបករណ៍ Italic (I) ស្ថិតនៅកន្លែងណាលើ Word Ribbon?",
        options: ["Home Tab -> Font Group", "Insert Tab -> Pages Group", "Layout Tab -> Paragraph Group", "View Tab -> Zoom Group"],
        correctAnswer: 0,
        explanation: "ជម្រើសទម្រង់អក្សរដូចជា Bold, Italic, និង Underline ស្ថិតនៅក្នុង Home Tab ក្រុម Font។",
      },
    ],
  },
  "word-102": {
    title: "ការធ្វើការជាមួយតារាង & Styles",
    description: "រៀបចំខ្លឹមសារក្នុងតារាង អនុវត្ត Heading styles និងបង្កើតបញ្ជីចំណុច (Bullet points)។",
    objectives: [
      "បញ្ចូល និងរចនាទម្រង់តារាង",
      "អនុវត្តរចនាប័ទ្ម Heading 1 និង Heading 2",
      "បង្កើតបញ្ជីចំណុច (Bulleted lists)",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "រចនាសម្ព័ន្ធចំណងជើង & ឋានានុក្រមឯកសារ",
        content: "Styles ធ្វើឱ្យឯកសាររបស់អ្នកមានភាពស៊ីសង្វាក់គ្នា និងអាចបង្កើតមាតិការដោយស្វ័យប្រវត្តិ។ Heading 1 ស័ក្តិសមសម្រាប់ចំណងជើងធំ ខណៈ Heading 2 ស័ក្តិសមសម្រាប់ផ្នែកតូចៗ។",
        type: "text",
      },
      {
        stepNumber: 2,
        title: "ការប្រកួតប្រជែង៖ អនុវត្ត Heading Style",
        content: "ចុចប៊ូតុងរចនាប័ទ្ម Heading 1 ក្នុងប្រអប់ Styles លើ Ribbon ដើម្បីកំណត់រចនាសម្ព័ន្ធឯកសារ។",
        type: "sim-challenge",
        hint: "ស្វែងរកប្រអប់ 'Heading 1' ក្នុងផ្ទាំង Styles លើ Home tab។",
      },
    ],
    quiz: [
      {
        id: "q-w102-1",
        type: "multiple-choice",
        question: "ហេតុអ្វីបានជាអ្នកគួរបញ្ចូល Styles ជាជាងការបន្ថែមទំហំអក្សរដោយដៃ?",
        options: [
          "Styles អនុញ្ញាតឱ្យបង្កើតមាតិកាដោយស្វ័យប្រវត្តិ និងមានភាពស៊ីសង្វាក់គ្នាក្នុងឯកសារ",
          "Styles ធ្វើឱ្យទំហំឯកសារតូចជាងមុន ៥០%",
          "Styles ការពារកំហុសក្នុងការព្រីន",
          "Styles បកប្រែអត្ថបទដោយស្វ័យប្រវត្តិ",
        ],
        correctAnswer: 0,
        explanation: "Styles បង្កើតរចនាសម្ព័ន្ធន័យវិទ្យាក្នុងឯកសារ ដែលអនុញ្ញាតឱ្យ Word បង្កើតមាតិកា និងផែនទីតម្រង់ទិស។",
      },
    ],
  },
  "excel-101": {
    title: "មូលដ្ឋានគ្រឹះ Excel៖ ក្រឡា និងតម្លៃ",
    description: "ស្ទាត់ជំនាញកូអរដោនេក្រឡា ការបញ្ចូលតម្លៃ និងការកំណត់ទម្រង់រូបិយវត្ថុ។",
    objectives: [
      "រៀបចំជួរឈរ (A,B,C...) និងជួរដេក (1,2,3...)",
      "ជ្រើសរើសជួរក្រឡា (ឧ. A1:B5)",
      "កំណត់ទម្រង់លេខជារូបិយវត្ថុ ($)",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "ការយល់ដឹងពីសៀវភៅបញ្ជី Excel",
        content: "Excel ផ្សំឡើងពីជួរឈរឈរដែលមានអក្សរ (A, B, C...) និងជួរដេកដេកដែលមានលេខ (1, 2, 3...)។ ចំនុចប្រសព្វរវាងជួរឈរ និងជួរដេកហៅថា ក្រឡា (Cell) (ឧ. A1)។",
        type: "text",
      },
      {
        stepNumber: 2,
        title: "ការប្រកួតប្រជែង៖ បញ្ចូលទិន្នន័យក្នុងក្រឡា A1",
        content: "ចុចលើក្រឡា A1 ក្នុងក្រឡាចត្រង្គ Excel ខាងក្រោម ហើយវាយបញ្ចូលលេខ 250។",
        type: "sim-challenge",
        hint: "ចុចក្រឡា A1 នៅជ្រុងខាងឆ្វេងផ្នែកខាងលើ ហើយវាយលេខ 250។",
      },
    ],
    quiz: [
      {
        id: "q-e101-1",
        type: "multiple-choice",
        question: "តើអ្វីជាឈ្មោះក្រឡានៅចំនុចប្រសព្វរវាងជួរឈរ C និងជួរដេក 5?",
        options: ["5C", "C5", "C-5", "R5C3"],
        correctAnswer: 1,
        explanation: "ឈ្មោះក្រឡាក្នុង Excel តែងតែបង្ហាញអក្សរជួរឈរមុន បន្ទាប់មកលេខជួរដេក (ឧ. C5)។",
      },
    ],
  },
  "excel-102": {
    title: "ការស្ទាត់ជំនាញរូបមន្ត Excel (=SUM)",
    description: "សរសេររូបមន្តចាប់ផ្តើមដោយសញ្ញា '=' និងគណនាផលបូក ព្រមទាំងមធ្យមភាគជាមួយ =SUM() និង =AVERAGE()។",
    objectives: [
      "យល់ដឹងថាហេតុអ្វីរូបមន្ត Excel ទាំងអស់ត្រូវចាប់ផ្តើមដោយសញ្ញា =",
      "សរសេររូបមន្ត =SUM(A1:A4) ដើម្បីគណនាផលបូក",
      "ប្រើប្រាស់ =AVERAGE() ដើម្បីគណនាតម្លៃមធ្យមភាគ",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "ថាមពលនៃរូបមន្ត Excel",
        content: "គ្រប់រូបមន្តទាំងអស់ក្នុង Excel ត្រូវតែចាប់ផ្តើមដោយសញ្ញាសមើ (=)។ អនុមុខ =SUM() បូកបញ្ចូលគ្នានូវរាល់លេខក្នុងជួរក្រឡាដែលបានកំណត់។",
        type: "text",
      },
      {
        stepNumber: 2,
        title: "ការប្រកួតប្រជែង៖ គណនាផលបូកជាមួយ =SUM()",
        content: "ក្នុងក្រឡា A4 នៃកម្មវិធីត្រាប់តាម Excel វាយបញ្ចូល '=SUM(A1:A3)' រួចចុច Enter ដើម្បីគណនាផលបូកសរុប!",
        type: "sim-challenge",
        hint: "ជ្រើសរើសក្រឡា A4 វាយ =SUM(A1:A3) រួចចុច Enter។",
      },
    ],
    quiz: [
      {
        id: "q-e102-1",
        type: "multiple-choice",
        question: "តើសញ្ញាមួយណាដែលត្រូវតែវាយមុនគេនៅពេលសរសេររូបមន្តក្នុង Excel?",
        options: ["+", "=", "$", "@"],
        correctAnswer: 1,
        explanation: "គ្រប់រូបមន្ត Excel ទាំងអស់ត្រូវតែចាប់ផ្តើមដោយសញ្ញាសមើ (=) ដើម្បីឱ្យ Excel ដឹងថានេះជារូបមន្តគណនា។",
      },
      {
        id: "q-e102-2",
        type: "multiple-choice",
        question: "តើរូបមន្តមួយណាដែលគណនាផលបូកក្រឡាពី A1 ដល់ A5 បានត្រឹមត្រូវ?",
        options: ["=SUM(A1:A5)", "=ADD(A1,A5)", "=PLUS(A1:A5)", "=TOTAL(A1..A5)"],
        correctAnswer: 0,
        explanation: "=SUM(A1:A5) គឺជាអនុមុខស្តង់ដារត្រឹមត្រូវក្នុង Excel សម្រាប់បូកសរុបជួរក្រឡា។",
      },
    ],
  },
  "ppt-101": {
    title: "ស្លាយ និងប្រធានបទរចនា PowerPoint",
    description: "រៀនបន្ថែមស្លាយថ្មី ជ្រើសរើសប្រធានបទរចនា និងរៀបចំរូបភាពបទបង្ហាញ។",
    objectives: [
      "មើលស្លាយតូចៗ និងផ្ទៃធ្វើការដើម",
      "បន្ថែមស្លាយថ្មីជាមួយទម្រង់ចំណងជើង",
      "អនុវត្តប្រធានបទរចនា (Themes)",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "ប្លង់កន្លែងធ្វើការ PowerPoint",
        content: "PowerPoint មានបន្ទះស្លាយខាងឆ្វេងដែលបង្ហាញស្លាយតូចៗ ផ្ទៃកែសម្រួលកណ្តាល និងរបារ Ribbon ផ្នែកខាងលើ។",
        type: "text",
      },
      {
        stepNumber: 2,
        title: "ការប្រកួតប្រជែង៖ បន្ថែមស្លាយថ្មី",
        content: "ចុចប៊ូតុង 'New Slide' លើ Ribbon ដើម្បីបន្ថែមស្លាយថ្មីក្នុងបទបង្ហាញ!",
        type: "sim-challenge",
        hint: "ចុចប៊ូតុង + New Slide លើ Home Ribbon នៃ PowerPoint។",
      },
    ],
    quiz: [
      {
        id: "q-p101-1",
        type: "multiple-choice",
        question: "តើ View Mode មួយណាក្នុង PowerPoint ដែលអនុញ្ញាតឱ្យមើលស្លាយតូចៗទាំងអស់ក្នុងទម្រង់តារាង?",
        options: ["Slide Sorter View", "Reading View", "Outline View", "Master View"],
        correctAnswer: 0,
        explanation: "Slide Sorter View បង្ហាញស្លាយទាំងអស់ក្នុងប្លង់ក្រឡាចត្រង្គ ធ្វើឱ្យងាយស្រួលក្នុងការរៀបចំលំដាប់ស្លាយ។",
      },
    ],
  },
  "outlook-101": {
    title: "ការគ្រប់គ្រងអ៊ីមែល & ការអញ្ជើញប្រជុំ",
    description: "សរសេរអ៊ីមែល បន្ថែមឯកសារភ្ជាប់ រៀបចំកាលវិភាគប្រជុំ និងកំណត់វិធានការតម្រៀបសារ។",
    objectives: [
      "សរសេរអ៊ីមែលផ្លូវការជាមួយ CC/BCC",
      "រៀបចំកាលវិភាគប្រជុំជាមួយអ្នកចូលរួម និងតំណ Teams",
      "បង្កើតវិធានការតម្រៀបសារស្វ័យប្រវត្តិ",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "ការរួមបញ្ចូល Outlook Mail & Calendar",
        content: "Outlook រួមបញ្ចូលសារអ៊ីមែល កាលវិភាគ និងការគ្រប់គ្រងទំនាក់ទំនងក្នុងកន្លែងធ្វើការតែមួយ។",
        type: "text",
      },
    ],
    quiz: [
      {
        id: "q-o101-1",
        type: "multiple-choice",
        question: "តើអក្សរកាត់ BCC មានន័យដូចម្តេចក្នុងសារអ៊ីមែល?",
        options: ["Blind Carbon Copy", "Business Contact Communication", "Basic Courtesy Copy", "Binary Code Channels"],
        correctAnswer: 0,
        explanation: "Blind Carbon Copy (BCC) លាក់អាសយដ្ឋានអ៊ីមែលរបស់អ្នកទទួលពីអ្នកទទួលផ្សេងទៀតក្នុងសារ។",
      },
    ],
  },
  "access-101": {
    title: "តារាងមូលដ្ឋានទិន្នន័យ & Primary Keys",
    description: "រៀបចំរចនាសម្ព័ន្ធតារាង កំណត់ប្រភេទវាល កំណត់ Primary Keys និងបង្កើតសំណួរ Select Queries។",
    objectives: [
      "កំណត់តារាង វាល និងកំណត់ត្រា",
      "កំណត់ Primary Keys តែមួយគត់",
      "ដំណើរការ Select Queries មូលដ្ឋាន",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "តើអ្វីជា Relational Database?",
        content: "ខុសពីសៀវភៅបញ្ជី មូលដ្ឋានទិន្នន័យតភ្ជាប់តារាងកំណត់ត្រាជាច្រើនដោយប្រើប្រាស់សោទំនាក់ទំនង ដើម្បីលុបទិន្នន័យស្ទួន។",
        type: "text",
      },
    ],
    quiz: [
      {
        id: "q-a101-1",
        type: "multiple-choice",
        question: "តើគោលបំណងនៃ Primary Key ក្នុងតារាង Access គឺជាអ្វី?",
        options: [
          "សម្គាល់រាល់កំណត់ត្រាក្នុងតារាងដោយមិនឱ្យមានការស្ទួន",
          "រក្សាការសម្ងាត់ឯកសារមូលដ្ឋានទិន្នន័យ",
          "តម្រៀបអត្ថបទតាមលំដាប់អក្សរស្វ័យប្រវត្តិ",
          "កំណត់ទម្រង់តម្លៃរូបិយវត្ថុ",
        ],
        correctAnswer: 0,
        explanation: "Primary Key ធានាថារាល់ជួរដេកក្នុងតារាងមូលដ្ឋានទិន្នន័យអាចត្រូវបានយោងដោយឡែកតែមួយគត់។",
      },
    ],
  },
  "onenote-101": {
    title: "ការរៀបចំសៀវភៅកត់ត្រាឌីជីថល",
    description: "រៀបចំកំណត់ត្រាជា ផ្នែក (Sections), ទំព័រ (Pages), ស្លាក (Tags) និងសៀវភៅកត់ត្រារួមគ្នា។",
    objectives: [
      "បង្កើតផ្នែក Sections និងទំព័រ Pages",
      "ប្រើប្រាស់រូបតំណាង To-Do & Important tags",
      "កែសម្រួលកំណត់ត្រារួមគ្នាក្នុងពេលដំណាលគ្នា",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "ឋានានុក្រមរបស់ OneNote",
        content: "OneNote ត្រាប់តាមសៀវភៅកត់ត្រាពិតប្រាកដដែលមាន៖ Notebooks -> Sections (tabs) -> Pages។",
        type: "text",
      },
    ],
    quiz: [
      {
        id: "q-on101-1",
        type: "multiple-choice",
        question: "តើរចនាសម្ព័ន្ធខ្លឹមសារក្នុង Microsoft OneNote ត្រូវបានរៀបចំយ៉ាងដូចម្តេច?",
        options: [
          "Notebooks -> Sections -> Pages",
          "Folders -> Documents -> Lines",
          "Workbooks -> Worksheets -> Cells",
          "Decks -> Slides -> Shapes",
        ],
        correctAnswer: 0,
        explanation: "OneNote ដើរតាមទម្រង់សៀវភៅកត់ត្រាក្រវ៉ាត់៖ សៀវភៅ (Notebooks) មានផ្នែក (Sections) និងទំព័រ (Pages)។",
      },
    ],
  },
  "teams-101": {
    title: "Channels, ការសន្ទនា & ការហៅវីដេអូ",
    description: "ស្ទាត់ជំនាញលើការសន្ទនា Channel, ការចែករំលែកឯកសារ, ការគ្រប់គ្រងការហៅប្រជុំ និង狀態 status settings។",
    objectives: [
      "យល់ដឹងពី Channels ប្រៀបធៀបនឹង 1-on-1 Chats",
      "ចែករំលែកឯកសារសម្រាប់ការកែសម្រួលរួមគ្នា",
      "ប្រើប្រាស់ឧបករណ៍គ្រប់គ្រងការហៅវីដេអូ (Mute, Camera, Screen Share)",
    ],
    steps: [
      {
        stepNumber: 1,
        title: "សូមស្វាគមន៍មកកាន់ Teams",
        content: "Microsoft Teams ប្រមូលផ្តុំការផ្ញើសារក្រុម ការហៅវីដេអូ និងការកែសម្រួលឯកសាររួមគ្នាក្នុងកន្លែងតែមួយ។",
        type: "text",
      },
    ],
    quiz: [
      {
        id: "q-t101-1",
        type: "multiple-choice",
        question: "តើអ្វីជាភាពខុសគ្នារវាង Channel post និង Direct Chat ក្នុង Teams?",
        options: [
          "Channel posts មើលឃើញដោយសមាជិកក្រុមទាំងអស់ ខណៈ Direct Chats ជាការសន្ទនាផ្ទាល់ខ្លួន",
          "Direct Chats ថតសម្លេងដោយស្វ័យប្រវត្តិ",
          "Channel posts អាចមានតែអត្ថបទដោយគ្មានឯកសារភ្ជាប់",
          "Direct Chats តម្រូវឱ្យរៀបចំកាលវិភាគមុន ២៤ ម៉ោង",
        ],
        correctAnswer: 0,
        explanation: "Channels គឺជាកន្លែងពិភាក្សាសាធារណៈសម្រាប់គម្រោងក្រុម ខណៈ Direct Chats គឺជាការសន្ទនាផ្ទាល់ខ្លួន ១ទល់១ ឬក្រុមតូច។",
      },
    ],
  },
};

export const khmerShortcutsMap: Record<string, Partial<ShortcutItem>> = {
  "sc-w1": { description: "ធ្វើឱ្យអត្ថបទដែលបានជ្រើសរើសទៅជា ដិត (Bold)" },
  "sc-w2": { description: "ធ្វើឱ្យអត្ថបទដែលបានជ្រើសរើសទៅជា ទ្រេត (Italic)" },
  "sc-w3": { description: "គូសបន្ទាត់ពីក្រោមអត្ថបទ (Underline)" },
  "sc-w4": { description: "តម្រឹមឃ្លានៅកណ្តាល (Center align)" },
  "sc-e1": { description: "បញ្ចូលរូបមន្តផលបូកស្វ័យប្រវត្តិ (AutoSum)" },
  "sc-e2": { description: "កែប្រែក្រឡាដែលកំពុងជ្រើស (Edit active cell)" },
  "sc-e3": { description: "កំណត់ទម្រង់ជារូបិយវត្ថុ ($)" },
  "sc-p1": { description: "ចាប់ផ្តើមការបង្ហាញស្លាយ (Start slideshow)" },
  "sc-p2": { description: "បញ្ចូលស្លាយថ្មី (Insert new slide)" },
  "sc-p3": { description: "ចម្លងស្លាយដែលបានជ្រើសរើស (Duplicate slide)" },
  "sc-o1": { description: "សរសេរអ៊ីមែលថ្មី (Compose new email)" },
  "sc-o2": { description: "ផ្ញើសារអ៊ីមែល (Send email draft)" },
};

export const khmerChallengesMap: Record<string, Partial<PracticeChallenge>> = {
  "ch-word-resume": {
    title: "បង្កើតប្រវត្តិរូបសង្ខេបអាជីព",
    description: "កំណត់ទម្រង់ប្រវត្តិរូបសង្ខេប៖ តម្រឹមឈ្មោះនៅកណ្តាល កំណត់អក្សរដិតលើចំណងជើងផ្នែក និងបង្កើតបញ្ជីចំណុចលើប្រវត្តិការងារ។",
    checklist: [
      { id: "t1", text: "កំណត់អក្សរដិត (Bold) លើឈ្មោះបេក្ខជន 'Alex Morgan'" },
      { id: "t2", text: "តម្រឹមព័ត៌មានទំនាក់ទំនងនៅចំកណ្តាល" },
      { id: "t3", text: "អនុវត្តរចនាប័ទ្ម Heading 1 លើ 'Work Experience'" },
      { id: "t4", text: "កំណត់ទម្រង់ភារកិច្ចការងារជាបញ្ជីចំណុច (Bullet points)" },
    ],
  },
  "ch-excel-budget": {
    title: "គណនាថវិកាចំណាយប្រចាំខែ",
    description: "គណនាចំណូល និងចំណាយប្រចាំខែដោយប្រើរូបមន្ត =SUM កំណត់ទម្រង់ជារូបិយវត្ថុ ($) និងបង្ហាញប្រាក់សន្សំសុទ្ធ។",
    checklist: [
      { id: "t1", text: "បញ្ចូលថ្លៃជួលផ្ទះប្រចាំខែ $1,400" },
      { id: "t2", text: "គណនាចំណូលសរុបដោយប្រើ =SUM(B2:B4)" },
      { id: "t3", text: "គណនាចំណាយសរុបដោយប្រើ =SUM(B6:B10)" },
      { id: "t4", text: "កំណត់ទម្រង់ក្រឡាផលបូកជារូបិយវត្ថុ ($)" },
    ],
  },
  "ch-ppt-pitch": {
    title: "ស្លាយបទបង្ហាញក្រុមហ៊ុន",
    description: "រចនាស្លាយបទបង្ហាញ ៣ ទំព័រ៖ ជ្រើសរើសប្រធានបទពណ៌ខៀវ បន្ថែមស្លាយចំណងជើង បញ្ចូលរូបភាព និងមើលបែបផែនផ្លាស់ប្តូរ។",
    checklist: [
      { id: "t1", text: "កំណត់អត្ថបទចំណងជើង 'OfficeLearn Q3 Pitch'" },
      { id: "t2", text: "បន្ថែមស្លាយខ្លឹមសារថ្មីចំនួន ២" },
      { id: "t3", text: "អនុវត្តប្រធានបទស្លាយ 'Dark Sapphire'" },
      { id: "t4", text: "មើលគំរូបែបផែនផ្លាស់ប្តូរស្លាយ (Slide transition)" },
    ],
  },
  "ch-outlook-meeting": {
    title: "រៀបចំកាលវិភាគប្រជុំប្រចាំផ្នែក",
    description: "សរសេរអ៊ីមែលប្រជុំ អញ្ជើញសមាជិក ៣ នាក់ចូលរួមវីដេអូ call ក្នុង Teams និងកំណត់ការឆ្លើយតបស្វ័យប្រវត្តិ។",
    checklist: [
      { id: "t1", text: "សរសេរសារអញ្ជើញប្រជុំចំណងជើង 'Weekly Marketing Sync'" },
      { id: "t2", text: "បន្ថែមអ្នកចូលរួម team@company.com" },
      { id: "t3", text: "បើកជម្រើសប្រជុំវីដេអូ Microsoft Teams" },
    ],
  },
};

export const khmerBadgesMap: Record<string, Partial<Badge>> = {
  "welcome-explorer": {
    title: "អ្នករុករក Office",
    description: "បានចាប់ផ្តើមដំណើររៀនសូត្រលើ OfficeLearn!",
  },
  "xp-100": {
    title: "តារារះថ្មី",
    description: "ទទួលបានពិន្ទុ ១០០ XP ដំបូងរបស់អ្នកពីមេរៀន Office។",
  },
  "word-beginner": {
    title: "អ្នកចាប់ផ្តើម Word",
    description: "បានបញ្ចប់មេរៀនកែទម្រង់ Microsoft Word ដំបូងរបស់អ្នក។",
  },
  "excel-master": {
    title: "អ្នកជំនាញរូបមន្ត Excel",
    description: "បានគណនារូបមន្ត និងបង្កើតសៀវភៅបញ្ជីដោយជោគជ័យក្នុង Excel។",
  },
  "ppt-designer": {
    title: "អ្នករចនា PowerPoint",
    description: "បានរចនាស្លាយបទបង្ហាញ និងអនុវត្តប្រធានបទពណ៌ទាក់ទាញ។",
  },
  "shortcut-ninja": {
    title: "អ្នកជំនាញផ្លូវកាត់ (Ninja)",
    description: "ទទួលបានពិន្ទុ ៥+ ក្នុងការហ្វឹកហាត់ផ្លូវកាត់ក្តារចុច!",
  },
  "office-expert": {
    title: "អ្នកជំនាញ Office ជាន់ខ្ពស់",
    description: "ទទួលបានពិន្ទុ ១,០០០ Total XP លើគ្រប់មេរៀន Microsoft Office!",
  },
};
