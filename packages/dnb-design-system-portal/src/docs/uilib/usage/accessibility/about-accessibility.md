---
draft: true
---

## Eufemia aims to be [WCAG 2.1](https://www.w3.org/TR/WCAG21/) compliant

HTML elements are by default good at accessibility. Eufemia components and its building blocks are also made to include all the needed features to make them accessible.

But - you as a developer has the responsibility to have the technical knowledge about accessibility. You have to implement and [use best practices](!/uilib/usage/accessibility) to make applications accessible for every user. We talk about all kinds of users, people who have temporary or permanent disabilities, so they depend on what you put into the application - as code.

[From year 2021](https://uu.difi.no/krav-og-regelverk/webdirektivet-og-wcag-21), all new and existing web solutions has to follow [WCAG 2.1](https://www.w3.org/TR/WCAG21/). On _uu.difi.no_ you find a [very good and easy to read WCAG guide (Norwegian)](https://uu.difi.no/krav-og-regelverk/wcag-20-standarden).

## Screen reader users

Should be able to use the most common used screen readers like VoiceOver (Apple devices) and NVDA or JAWS on Windows. Read more about [screen readers](uilib/usage/accessibility/screenreader).

> **4.1 Compatible:** Maximize compatibility with current and future user agents, _including assistive technologies_.

## Keyboard users

Should be able to navigate the application by their keyboard only. For those it is extremely important that [active focus management](uilib/usage/accessibility/focus) is done right.

> **2.1.1 Keyboard:** All functionality of the content is _operable through a keyboard_ interface without requiring specific timings for individual keystrokes, except where the underlying function requires input that depends on the path of the user's movement and not just the endpoints.

## **200%** in `font-size`

The [WCAG 2.1](https://www.w3.org/TR/WCAG21/) document is describing it clearly:

> **1.4.4 Resize text:** Text can be resized without assistive technology _up to 200 percent without loss of content or functionality_.<br /><br /> **1.4.8 Visual Presentation:** Text can be resized without assistive technology up to 200 percent in a way that _does not require the user to scroll horizontally_ to read a line of text.

This means, every application **has to be made responsive**. Even if the application lives in a static sized container (960px). Use your browser or system settings to change the `font-size` for testing purposes.
