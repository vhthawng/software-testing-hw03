

Software Testing Software Testing CSC13003 Usability Testing 



# Content 

- **GUI testing** 

- Usability testing 



Department of Software Engineering 

2 

# What is GUI testing? 

- Abbreviation of Graphic User Interface. 

- Defintion: Examine various elements of the user interface, such as buttons, menus, input fields, and visual design, to verify they work as intended 



Department of Software Engineering 

3 

# What is GUI testing? 

- Purpose: The primary purpose of GUI Testing is to identify and rectify any issues or defects related to the user interface. It ensures that the application is visually appealing, user-friendly, and responsive. 



Department of Software Engineering 

4 

# What is GUI testing? 

- Functional Validation: While GUI Testing focuses on the visual and interactive aspects of the software, it also checks whether the functionality tied to these elements is working correctly. It ensures that user interactions lead to the expected outcomes. 



Department of Software Engineering 

5 

# What is GUI testing? 

- Common Elements: GUI Testing assesses common GUI elements, including buttons, checkboxes, radio buttons, dropdown menus, text fields, and error messages, among others. 



Department of Software Engineering 

6 

# Why is GUI testing necessary? 

- User-Centric Focus: The user interface is the point of interaction between the software and the end user. Ensuring its reliability and usability is essential for a positive user experience. 

- Visual Consistency: GUI Testing verifies that the software maintains visual consistency across different devices and platforms. It helps prevent issues like text overflow, misalignment, and distorted graphics. 



Department of Software Engineering 

7 

# Why is GUI testing necessary? 

- Functional Verification: GUI Testing ensures that the functionality tied to the GUI elements works as expected. It validates that buttons perform the intended actions, forms accept input correctly, and menus lead to the right options. 

- Usability and Accessibility: It assesses the software's usability, making sure it's intuitive and easy to navigate. GUI Testing also checks for accessibility features to accommodate users with disabilities, meeting regulatory requirements. 



Department of Software Engineering 

8 

# Why is GUI testing necessary? 

- Brand Reputation: A polished and bug-free user interface reflects positively on your brand's reputation. It can attract and retain users, fostering trust and loyalty. 

- Bug Detection: Many critical bugs and issues manifest in the GUI layer. GUI Testing helps identify these issues early in the development process, reducing the cost of fixing them later. 

- Compliance: In industries like healthcare and finance, compliance with regulatory standards is essential. GUI Testing ensures that the software complies with industry-specific guidelines and requirements. 



Department of Software Engineering 

9 

# Process 



<!-- Start of picture text -->
1<br>Specify '' Prepare 1; Execute<br>Test ' Tests ; Tests<br>;'<br>1<br>1Prepare '<br>' Manual + oan<br>; Scripts ' seeuien<br>1<br>11<br>1<br>1'<br>1<br>Test Design AutomatedRecord '1<br>Scripts '<br>1<br>'<br>Integrate ; Automated<br>'1 Automated Execution<br>1<br>Soripts '<br>' Code 1<br>1 Automated '<br>' Soripts '1<br>'<br>'1<br><!-- End of picture text -->



<!-- Start of picture text -->
fit@hcmus<br><!-- End of picture text -->

Department of Software Engineering 

10 

# Common GUI bugs 

- Data validation 

- Incorrect field default 

- Mishandling of server process failures 

- Mandatory fields, not mandatory 

- Wrong fields retrieved by queries 



Department of Software Engineering 

11 

# Common GUI bugs 

- Incorrect search criteria 

- Field order 

- Multiple database rows returned, single row expected 

- Currency of data on screens 

- Window object/DB field correspondence 



Department of Software Engineering 

12 

# Common GUI bugs 

- Correct window modality? 

- Window system commands not available/don’t work 

- Control state alignment with state of data in window? 

- Focus on objects needing it? 



Department of Software Engineering 

13 

# Common GUI bugs 

- Menu  options  align  with  state  of  data  or  application mode? 

- Action of menu commands aligns with state of data in window 

- Synchronization of window object content 

- State of controls aligns with state of data in window? 



Department of Software Engineering 

14 

# Types in GUI testing 



<!-- Start of picture text -->
Test Types<br>Low Level Checklist testing<br>Navigation<br>Application Equivalence Partitioning<br>Boundary Values<br>Decision Tables<br>State Transition Testing<br>Integration Desktop Integration<br>C/S Communications<br>Synchronisation<br>Non-Functional Soak testing<br>Compatibility testing<br>Platform/environment<br><!-- End of picture text -->



<!-- Start of picture text -->
fit@hcmus<br><!-- End of picture text -->

Department of Software Engineering 

15 

# Low level – Checklist testing 

- GUI standards 

- Application standards 

- Color scheme 

- Typography 

- Layout and alignment 

- Labels 

- Error messages 



Department of Software Engineering 

16 

# Low level – Navigation testing 

- Main Menu Navigation: Test the main navigation menu to ensure users can access all major sections of the application. 

- Breadcrumb Navigation: Verify that breadcrumb trails accurately reflect the user's path and allow users to backtrack. 



Department of Software Engineering 

17 

# Low level – Navigation testing 

- Links and Buttons: Check links, buttons, and call-to-action elements to confirm they lead to the expected screens or actions. 

- • Form Navigation: Ensure that users can move through forms easily, with proper focus order and validation messages. 



Department of Software Engineering 

18 

# Application testing 

**Technique Elements to test** Equivalence Partitions and Boundary Value -Input validation Analysis -Simple rule-based processing Decision Tables Complex logic or rule-based processing State-transition testing - Applications with modes or states where processing behavior is affected - Windows where there are dependencies between objects in the window. 



Department of Software Engineering 

19 

# Integration Level 

- Desktop integration testing 

- Client/Server communication testing 

- Synchronization testing 



Department of Software Engineering 

20 

# Non-functional Level 

- Soak testing 

- Compatibility testing 

- Platform/Environment testing 



Department of Software Engineering 

21 

# Challenges in GUI testing 

- Diverse Platforms and Devices: 

   - Challenge: Ensuring consistent GUI performance and appearance across various operating systems, browsers, and devices. 

   - Solution: Comprehensive cross-browser and cross-device testing, along with responsive design practices. 



Department of Software Engineering 

22 

# Challenges in GUI testing 

- Frequent UI Changes: 

   - Challenge: Rapid iterations and updates in the UI can lead to test script maintenance challenges. 

   - Solution: Implement a robust test automation framework, and use Page Object Model to decouple UI changes from test scripts. 



Department of Software Engineering 

23 

# Challenges in GUI testing 

- Test Coverage: 

   - Challenge: Ensuring complete coverage of all GUI elements and user workflows. 

   - Solution: Develop a comprehensive test strategy that covers critical paths and edge cases. 



Department of Software Engineering 

24 

# Challenges in GUI testing 

- Test Data and Environment Setup: 

   - Challenge: Creating and managing test data and test environments can be time-consuming. 

   - Solution: Use data provisioning tools and containerization for efficient environment setup. 



Department of Software Engineering 

25 

# Challenges in GUI testing 

- Localization and Internationalization: 

   - Challenge: Testing GUI for different languages, cultures, and regions. 

   - Solution: Utilize localization testing tools and collaborate with native speakers. 



Department of Software Engineering 

26 

# Challenges in GUI testing 

- Integration with Backend: 

   - Challenge: Coordinating GUI tests with backend systems and APIs. 

   - Solution: Implement end-to-end testing strategies and use mocking for backend components. 



Department of Software Engineering 

27 

# Automation in GUI testing 

**Manual vs Automated Loại kiểm thử** Checklist testing Manual: application conventions Automated: object states, menus, standard features Navigation Manual Equivalence Partitioning, Boundary Manual: complicated cases Values, Decision Tables, State Transition Automated: simple cases Testing Desktop Integration, C/S Communications Manual: complicated cases Automated: simple cases Synchronization Manual Soak testing, Compatibility testing, Automated Platform/environment 



Department of Software Engineering 

28 

# Content 

- GUI testing 

- **Usability testing** 



Department of Software Engineering 

29 

### <u>Usability Testing</u> 

- Process that employs representative target population participants to evaluate product usability using specific usability criteria 

- Usability testing is not a guarantee for product success, but it should identify at least the key problems i 



<!-- Start of picture text -->
i i a<br>ed ny : xX = ‘<br>USABILITY<br>TESTS4<br>pm<br><!-- End of picture text -->

### <u>Basic components</u> 

1. Development of specific problems statements and test plans and objectives 

2. Use of representative sample of end users 

3. Representation of the actual work environment 

4. Observation of end users during product use or review 

5. Collection of quantitative and qualitative measurements 

6. Analysis of results and recommendations 



### <u>Types of usability tests – Exploratory</u> 

- Early in the process 

- Can be based on any form of the GUI (sketch, wire diagrams etc.) 

- Evaluate preliminary, basic design concept 

- Perform representative tasks in a  “shallow” mode 

- Informal test methodology, a lot of interaction 

- Discuss high level concepts 



<!-- Start of picture text -->
= =<br>Usoene (4 ==,<br>[Taser 1<br>oy<br>layo|__ i<br>= a ee ai<br>(| Legteloatets<br>11 ae dame<br>! \ [ee Temea ale<br>veCLalieelpved OKC)Gel)£4 f.-3<br>Big SOS<br>Soret<br>EC i oe 4<br><!-- End of picture text -->



<!-- Start of picture text -->
fit@hcmus<br><!-- End of picture text -->

### <u>Types of usability tests – Assessment</u> 

- Done After fundamental concepts are done 

- Evaluates usability of lower level operations 

- The users actually perform set of well defined tasks 

- Less interaction with test monitor 

- Quantitative measurements are collected 



<!-- Start of picture text -->
Usability Testing<br>= ><br>Saree<br><!-- End of picture text -->



<!-- Start of picture text -->
a |<br>taj ><br>4 a<br>;<br>“SJ oy<br><!-- End of picture text -->



<!-- Start of picture text -->
(<br>tec<br>a ooe<br>~~<br><!-- End of picture text -->



<!-- Start of picture text -->
fit@hcmus<br><!-- End of picture text -->

### <u>Types of usability tests – Validation</u> 

- Done late in development cycle, close to release 

- Goal is to certify product usability, “disaster insurance” against launching a poor product 

- Often the first time when the whole product si tested (including help and docs) 

- • Evaluate wrt. some predetermined usability standard or benchmark 

- Standards come from **previous testing, competitive information, marketing** etc. 

- Very specific quantitative tests 

- Can establish standards for future products 

- Can be also done by beta customers 



### <u>Types of usability tests – Comparison</u> 

- Can be done at any point in the development cycle 

- Compare alternatives using objective measures 

- Can be informal of formal, depending when it is done 

- Often, best of alternative designs is combined 



### <u>Test environments</u> 

- Simple single room setups 

   - Observer/monitor close to evacuator 

   - Observer removed from evaluator 

- Electronic observation room 

- Classic elaborate usability lab 

- Mobile lab 



<u>Example</u> 



<!-- Start of picture text -->
Ceiling Camera Floor Camera’ Ee<br>Observers on Screen Audio<br>on Keyboard a OC | Span Gl<br>C, ]| C || Monitors eeSareee é 8 3= 8 Videographer| ) Analyst|)<br>G@ f C) Meeting Area<br>C] C | For Focus Groups [—)<br>J Prototyping Lo#<br>Observation Evaluation Control<br><!-- End of picture text -->



<!-- Start of picture text -->
fit@hcmus<br><!-- End of picture text -->

### <u>Typical test plan format</u> 

- <u>Purpose: what is the main purpose of the test</u> 

- <u>Problem statement:</u> specific questions you want resolved 

- <u>Test plan and objectives:</u> tasks the user will do 

- <u>User profile:</u> who will be the users 

- <u>Method and test design:</u> how will you observe it, how will you collect the data etc. 

- <u>Test environment and equipment</u> 

- <u>Test monitor role</u> 

- <u>Evaluation measures and data to be collected:</u> how will you collect the feedback and how will you evaluate it 

- <u>Report:</u> what will final report contain 



### <u>Task selection for evaluation</u> 

- Tasks to be evaluated are functions users want to do with the product. **Focus is on user view of the tasks and NOT at the components and details** that you used to implement it. Examples: 

   - Create and file document 

   - Import several images 

   - Find the right document 

- Objective is to indirectly expose usability flaws by asking the user to perform typical tasks and **NOT telling them exactly how to do it.** 

- Choose **key and most frequently** done tasks 

- The **task has to be specific and measurable** (quantitatively or qualitatively) 



### <u>Task components</u> 



<!-- Start of picture text -->
TASK DESCRIPTION<br>Task Load paper into<br>copier<br>Machine state Paper tray empty<br>Successful  Paper properly<br>completion criteria loaded<br>Benchmark Completed in 1<br>minute<br><!-- End of picture text -->



### <u>Selection of evaluators and test groups</u> 

- Evaluators should **be representative of the targeted users** 

- • Independent groups or within-subject design (but be careful to avoid exposing users to same tests since this will bias the results) 

- • Adequate numbers of testers 

- Offer motivation and rewards 



### <u>Measurements and Questionnaires</u> 

- <u>Performance data:</u> measures of user behavior such as **error rates, number of accesses to help, time** to perform the task etc. 

   - Usually can and should be objectively and automatically measured 

- <u>Preference data:</u> measures of **user opinion, thought process such as rankings, answers to questions, comments etc.** 

   - Use questionnaires. 



### Some performance measures (measure what can be <u>measured)</u> 

- Time to complete each task 

- Number and percentage of tasks completed successfully/unsuccessfully 

- • Time required to access information 

- Count of incorrect selections 

- Count errors 

- Time for system to respond 

- 

Data should be collected automatically or manually in an objective way. 



### <u>Questionnaires (for preference data)</u> 

#### _Likert scale_ 

- I found GUI easy to use (check one) • __ Strongly disagree  __ Disagree 

- • __ Neither agree or disagree 

   - __ Agree    __ Strongly agree 

   - • (can also assign numbers from –2 to 2) 

   - • _Semantic differentials_ 

- I found File Open menu (circle one) • Simple    3  2  1  0  1  2  3    Complex 



### <u>Questionnaires</u> 

## _Fill in questions_ 

• I found the following aspects of GUI particularly easy to use (list 0-4 aspects) 



### <u>Questionnaires</u> 

### _Check-box_ 

- Please check the statement that best describes your usage of spell check --- I always use spell check 

   - --- I use spell check only when I have to --- I never use spell check 



### <u>Questionnaires</u> 

## _Branching questions_ 

- Would you rather use advanced search 

--- NO (skip to question 19) --- YES (continue) 

- What kind of advanced search would you like? (check one) --- Boolean --- Relevance 



### <u>Summarizing performance results</u> 

- Performance data 

   - Mean time to complete 

   - Median time to complete 

   - Range (high and low) 

   - Standard deviation (độ lệch) of completion times 

   - System response time statistics 

- Task accuracy 

   - % of users completing the task within specified time 

   - % of users completing the task regardless (không quan tâm) of time 

   - Same as above, with assistance 

   - Average error rate 



### <u>Summarizing preference results</u> 

- For limited choice questions 

   - Count how many participants selected each choice (number and %) 

   - • For Likert scale or semantic differentials provide average scores if there are enough evaluators 

- For free form questions 

   - List questions and group answers into categories, also into positive and negative answers 

- For free comments 

   - List and group them at the end of the report 



### <u>Analyzing Data</u> 

- Identify and focus on tasks that **did not pass the test** or showed significant problems 

- Identify user errors and difficulties 

- Identify sources of errors 

- Prioritize problems by criticality = severity AND probability of occurrence 

- Analyze differences between groups (if applicable) 

- Provide recommendations at the end 



### <u>Problems statements and performance data to collect</u> 

**Problem Performance Data Statement Collected** How effective is the Compare error rates tutorial of users who used and not used this How easy is it to Error rate OR perform task X Number of steps needed 

Note: this is Performance data measurement only. You also need to asses user Preference data (see next slide) 



### <u>Problems statements and preference data to collect</u> 

**Problem Preference Data Statement Collected** How effective is the Ask user to rate it from very ineffective to very tutorial effective (Lickert scale or semantic differentials) + free comments How easy is it to Ask user to rate it from very easy to very difficult perform task X (Lickert scale or semantic differentials) + free comments 



### <u>Relate problem statements with tasks</u> 



<!-- Start of picture text -->
Problem Statement Task<br>How effective is the  GroupA: Import image<br>w/o using tutorial<br>tutorial<br>GroupB: Same but use<br>tutorial first<br>How easy is it to  Create Virtual machine<br>with “this” properties<br>Create Virtual<br>using New VM Wizard<br>Machine<br><!-- End of picture text -->



### <u>Task components</u> 



<!-- Start of picture text -->
TASK DESCRIPTION<br>Task Create VM using New<br>VM Wizard<br>Machine state VMware WS SW just<br>loaded<br>Successful completion  Working VM created<br>criteria<br>Benchmark Completed in 30 sec.<br><!-- End of picture text -->







