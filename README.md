# 3K - the Utility App.

The name came from Stephen Chow's Kill You 3000 (攞你命3000)

I am just making a varitey of small utility apps that I need to use.

* [ ] Image compression
* [ ] PDF conversion
* [ ] PDF combining
* [ ] QR Code Generator
* [ ] URL shortener
* [ ] Binary, hexadecimal, decimal converter
* [X] cover letter drafter

## Draft My Cover Letter

Cover Letter Drafter is an LLM-powered epistoler,
that helps job applicants to draft a cover letter.

## Goal

- Users uploaded their resume in pdf/docx,
- Input the company title, position, job description
- Output AI generated Cover Letter Draft.

The main goal is to allow the user of "Drafter" to input the target company name, job title, and job description, along with the his/her resume and generate a cover letter.

Users have 2 modes:

1. Non-register mode: User are able to generate cover letter but the resume will not be saved.
2. Registered mode: Users are able to reuse existing resume to generate cover letters, including an option to generate an update of the same cover letter by prompting, also the application record will be saved, and a pdf or docx document can be generated.

Application record will store the company, job title, job id, application date, status, and update date, these record could be generated automatically, status can be updated manually.

We will be using OpenAI api gpt-3.5-turbo as a support. Currently we will be using Spring AI OpenAI module to generate the prompt message but we are still considering using LangChain4J where it provide more clear examples, finer controls via annotations and configuration. (Thank you Marcus from Vaadin showing the demo.)

## Non-Goal

## Design

### Architecture

#### Frontend

React, React Router, Vitest, TailwindCss

#### Backend

Spring Boot, Security, SpringAI/LangChain4J, AssertJ/JUnit
