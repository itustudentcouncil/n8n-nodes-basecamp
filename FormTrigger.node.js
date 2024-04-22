class FormTrigger {
  description = {
    displayName: "Form Trigger",
    name: "formTrigger",
    icon: "file:FormTrigger.svg",
    group: ["trigger"],
    version: 1,
    description: "Starts a workflow when Form events occur",
    defaults: {
      name: "Form Trigger"
    },
    inputs: [],
    outputs: ["main"],
    webhooks: [
      {
        name: "displayForm",
        httpMethod: "GET",
        responseMode: "onReceived",
        path: "={{$parameter.path}}",
        isFullPath: true
      },
      {
        name: "default",
        httpMethod: "POST",
        responseMode: "onReceived",
        path: "={{$parameter.path}}",
        isFullPath: true
      }
    ],
    properties: [
      {
        displayName: "Path",
        name: "path",
        type: "string",
        default: "forms/my-form",
        placeholder: "webhook",
        required: true
      },
      {
        displayName: "Page Title",
        type: "string",
        default: "Test Form",
        name: "pageTitle"
      },
      {
        displayName: "Page Description",
        type: "string",
        default: "Fill out the form below and we will get back to you.",
        name: "pageDescription"
      },
      {
        displayName: "Form Type",
        name: "formType",
        type: "options",
        options: [
          {
            name: "Custom Form HTML",
            value: "customHTML",
            description: "Use your own HTML for the form body"
          },
          {
            name: "Form Builder",
            value: "formBuilder",
            description: "Use a simple form builder"
          }
        ],
        default: "formBuilder"
      },
      {
        displayName: "Form HTML",
        name: "formHTML",
        description: "HTML to use for your form body",
        type: "string",
        typeOptions: {
          alwaysOpenEditWindow: true,
          editor: "htmlEditor"
        },
        default: "",
        displayOptions: {
          show: {
            formType: ["customHTML"]
          }
        }
      },
      {
        displayName: "Fields",
        name: "fields",
        placeholder: "Add Fields",
        description: "Form Fields",
        type: "fixedCollection",
        typeOptions: {
          multipleValues: true,
          sortable: true
        },
        displayOptions: {
          show: {
            formType: ["formBuilder"]
          }
        },
        default: {},
        options: [
          {
            name: "item",
            displayName: "Item",
            values: [
              {
                displayName: "Input Type",
                name: "inputType",
                type: "options",
                default: "text",
                description: "Input type for the field",
                options: [
                  {
                    name: "Date",
                    value: "date"
                  },
                  {
                    name: "Email",
                    value: "email"
                  },
                  {
                    name: "Hidden",
                    value: "hidden"
                  },
                  {
                    name: "Password",
                    value: "password"
                  },
                  {
                    name: "Text",
                    value: "text"
                  },
                  {
                    name: "Textarea",
                    value: "textarea"
                  },
                  {
                    name: "Datepicker",
                    value: "datepicker"
                  }
                ]
              },
              {
                displayName: "Name",
                name: "name",
                type: "string",
                default: "",
                description: "Name to use for the input item"
              },
              {
                displayName: "Label",
                name: "label",
                type: "string",
                default: "",
                description: "Label for the input item"
              },
              {
                displayName: "Value",
                name: "value",
                type: "string",
                default: "",
                description: "Default value to use",
                displayOptions: {
                  show: {
                    inputType: ["hidden", "text", "email"]
                  }
                }
              },
              {
                displayName: "Placeholder",
                name: "placeholder",
                type: "string",
                default: "",
                description: "Placeholder value to use",
                displayOptions: {
                  show: {
                    inputType: ["text", "email"]
                  }
                }
              },
              {
                displayName: "Required",
                name: "required",
                type: "boolean",
                default: false,
                description: "Whether the field is required or not"
              },
              {
                displayName: "Read-Only",
                name: "readOnly",
                type: "boolean",
                default: false,
                description: "Whether the field is read-only or not"
              },
              {
                displayName: "bookingCutOff",
                name: "bookingCutOff",
                type: "number",
                default: "",
                description: "Booking Cut Off",
                displayOptions: {
                  show: {
                    inputType: ["datepicker"]
                  }
                },
              },
              {
                displayName: "Availability",
                name: "availability",
                placeholder: "Add Metadata",
                type: "fixedCollection",
                default: "",
                typeOptions: {
                  multipleValues: true
                },
                description: "",
                displayOptions: {
                  show: {
                    inputType: ["datepicker"]
                  }
                },
                options: [
                  {
                    name: "datetime",
                    displayName: "DateTime",
                    values: [
                      {
                        displayName: "Day",
                        name: "name",
                        type: "options",
                        options: [
                          {
                            name: "Monday",
                            value: "monday"
                          },
                          {
                            name: "Tuesday",
                            value: "tuesday"
                          },
                          {
                            name: "Wednesday",
                            value: "wednesday"
                          },
                          {
                            name: "Thursday",
                            value: "thursday"
                          },
                          {
                            name: "Friday",
                            value: "friday"
                          },
                          {
                            name: "Saturday",
                            value: "saturday"
                          },
                          {
                            name: "Sunday",
                            value: "sunday"
                          }
                        ]
                      },
                      {
                        displayName: "Times",
                        name: "times",
                        type: "string",
                        default: "",
                        description: "Value to set for the metadata key."
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      // Optional Settings
      {
        displayName: "Options",
        type: "collection",
        name: "options",
        default: {},
        options: [
          {
            displayName: "Form ID",
            name: "formId",
            default: "n8n-form",
            type: "string",
            description: "Form ID to use"
          },
          {
            displayName: "Form Name",
            name: "formName",
            default: "n8n-form",
            type: "string",
            description: "Form Name to use"
          },
          {
            displayName: "Javascript",
            name: "javascript",
            type: "string",
            typeOptions: {
              alwaysOpenEditWindow: true,
              editor: "htmlEditor"
            },
            description: "Javascript to use for form submission"
          },
          {
            displayName: "CSS",
            name: "css",
            type: "string",
            typeOptions: {
              editor: "htmlEditor"
            },
            description: "CSS to use for the form."
          },
          {
            displayName: "Submit Button Label",
            name: "submitLabel",
            default: "Submit",
            type: "string",
            description: "Text to use for the submit button"
          }
        ]
      }
    ]
  }

  async webhook() {
    const webhookName = this.getWebhookName()

    if (webhookName === "displayForm") {
      const options = this.getNodeParameter("options", 0)
      const pageTitle = this.getNodeParameter("pageTitle", 0)
      const formType = this.getNodeParameter("formType", 0)

      const submitLabel = options.submitLabel || "Submit"

      const res = this.getResponseObject()

      let htmlFields = ""

      const inputField = (f) => /*html*/ `
        <input ${[
          `id="${f.name}"`,
          `type="${f.inputType}"`,
          `name="${f.name}"`,
          `value="${f.value || ""}"`,
          `placeholder="${f.placeholder || ""}"`,
          f.required ? "required" : "",
          f.readOnly ? "readonly" : ""
        ]
          .filter(Boolean)
          .join(" ")} />
        `

      const datePickerField = this.getNodeParameter("fields.item", 0).find(
        (f) => f.inputType === "datepicker")


      const availability = datePickerField.availability.datetime

      const availableDays = availability.map((a) => a.name)

      const weekdays = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday"
      ]

      const daysOfWeekDisabled = weekdays
        .filter((w) => !availableDays.includes(w))
        .map((w) => weekdays.indexOf(w))

      const loop = (collection, template) =>
        collection.map((item) => template(item)).join("")
        

      const customComponents = {
        datepicker: (f) => /*html*/ `
         <div class="flex flex-col gap-2">
          <div class="relative max-w-sm">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <input 
              type="text" 
              id="datepicker" 
              style="padding-inline-start: 2rem;" 
              name="${f.name}" />
            
          </div>

          ${loop(availability, day => /*html*/ `
            <div class="flex flex-row gap-2 hidden timepicker" id="${day.name}-timepicker">
              ${loop(day.times.split(', '), time => /*html*/ `
                <div>
                  <input type="radio" id="${day.name}-${time}" class="hidden peer" name="timetable" value="${time}:00">
                  <label for="${day.name}-${time}" class="time">
                    ${time}:00
                  </label>
                </div>
              `)}
            </div>
          `)}
        </div>
        `,

        textarea: (f) => /*html*/ `
          <textarea
            id="${f.name}"
            name="${f.name}"
            rows="4"></textarea>
          `
      }

      if (formType === "customHTML") {
        htmlFields = this.getNodeParameter("formHTML", 0)
      } else {
        htmlFields = this.getNodeParameter("fields.item", 0)
          .map(
            (f) => /*html*/`
                <div class="form-group">
                  ${f.label && `<label for="${f.name}">${f.label}</label>`}

                  ${
                    customComponents.hasOwnProperty(f.inputType)
                      ? customComponents[f.inputType](f)
                      : inputField(f)
                  }
                </div>
            `
          )
          .join("")
      }

      const importMap = /* json */ `
        {
          "imports": {
            "flowbite": "https://cdn.jsdelivr.net/npm/flowbite@2.3.0/+esm",
            "flowbite-datepicker": "https://cdn.jsdelivr.net/npm/flowbite-datepicker@1.2.6/+esm",
            "turbo": "https://cdn.jsdelivr.net/npm/@hotwired/turbo@8.0.4/dist/turbo.es2017-esm.js"
          }
        }
      `

      

      const mainScript = /* js */ `
        import * as Turbo from 'turbo';
        import 'flowbite';
        import { Datepicker } from 'flowbite-datepicker';

        document.addEventListener('DOMContentLoaded', () => {
            Turbo.start();
        });

        const datepickerEl = document.getElementById('datepicker');

        const weekFromToday = new Date();
        weekFromToday.setDate(weekFromToday.getDate() + ${datePickerField.bookingCutOff});

        const datepicker = new Datepicker(datepickerEl, {
          language: 'en',
          format: "DD, MM dd, yyyy",
          weekStart: 1,
          minDate: weekFromToday,
          autohide: true,
          daysOfWeekDisabled: ${JSON.stringify(daysOfWeekDisabled)},
        });

        datepickerEl.addEventListener('changeDate', (e) => {
          const selectedDate = e.detail.date;
          const selectedDay = selectedDate.getDay();
          const selectedTime = selectedDate.getHours();

          const weekdays = [
            "sunday",
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday"
          ];

          const inputs = Array.from(document.getElementsByClassName('timepicker')).forEach((input) => {
            input.classList.add('hidden');
          });

          const selectedDayName = weekdays[selectedDay];
          const selectedTimepicker = document.getElementById(selectedDayName + '-timepicker');

          selectedTimepicker.classList.remove('hidden');
        });
      `

      const tailwindCSS = /* css */`
        @layer utilities {
          ${options.css || ""}

          .datepicker-cell:not(.disabled) {
            position: relative;
          }

          .datepicker-cell.disabled {
            @apply opacity-80;
          }

          .datepicker-cell:not(.disabled):after {
            content: '';
            @apply bg-blue-500 rounded-full absolute bottom-1 left-1/2;

            @apply w-1 h-1 -translate-x-1/2;
          }

          h1 {
            @apply text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white
          }

          p {
            @apply text-gray-600 dark:text-gray-400
          }

          button[type="submit"] {
            @apply w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800;
          }

          label {
            @apply block mb-2 text-sm font-medium text-gray-900 dark:text-white;
          }

          textarea {
            @apply block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
          }

          select {
            @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
          }

          input[type="text"], input[type="email"], input[type="password"] {
            @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
          }

          label.time {
            @apply inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:hover:text-white dark:border-blue-500 dark:peer-checked:border-blue-500 peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:text-white peer-checked:text-white hover:bg-blue-500 dark:text-blue-500 dark:bg-gray-900 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:peer-checked:bg-blue-500;
          }
        }
      `

      const body = /* html */ `
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                    Student Council
                </a>

                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
       							<h1>${pageTitle}</h1>

       							<form
                      id='${options.formId || "n8n-form"}'
                      action='#'
                      method='POST'
                      name='${options.formName || "n8n-form"}'
                      class="space-y-4 md:space-y-6">

                      ${htmlFields}

                      <button type="submit">${submitLabel}</button>
       							</form>
                  </div>
                </div>
              </div>
            </section>`

      const testForm = /* html */ `
        <html>
          <head>
            <title>${pageTitle}</title>

            <script type="importmap">${importMap}</script>
            <script type="module">${mainScript}</script>

            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
            <style type="text/tailwindcss">${tailwindCSS}</style>
          </head>

          <body>${body}</body>
        </html>`

      res.status(200).send(testForm).end()

      return { noWebhookResponse: true }
    }

    const bodyData = this.getBodyData()

    return {
      webhookResponse: '{"status": "ok"}',
      workflowData: [this.helpers.returnJsonArray(bodyData)]
    }
  }
}

module.exports = { FormTrigger }
