---
title: Contact
layout: learn-more
slug: learn-more
sections:
  - type: ContactSection
    elementId: ''
    colors: colors-a
    backgroundSize: full
    title: Contact
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: info@plaintextcapital.com
      fields:
        - type: TextFormControl
          name: name
          label: Your Name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: false
          isRequired: true
          width: full
      submitLabel: Send
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-0
          - pb-12
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
    titleAddress: visit
    address: '240 Kent Avenue Brooklyn, NY 11249'
    titleEmail: email
    email: info@plaintextcapital.com
---