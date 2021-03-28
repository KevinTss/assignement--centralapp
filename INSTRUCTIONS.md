# Table of Contents

1.  [CentralApp front-end technical test](#orga7eef6d)
    1.  [Goal](#org567d50a)
    2.  [Introduction](#org71e46d7)
        1.  [Categories](#org51c598b)
        2.  [An example of an L1 category ](#orgd2ace87)
        3.  [Default endpoint](#org33e5f83)
        4.  [Level 1 endpoint](#orgfa71277)
        5.  [Level 0 endpoint](#org4f327f8)
        6.  [Level 0, 1 endpoint ](#orgebf2be0)
    3.  [Instructions](#orgece5231)
        1.  [Search Input](#org0760481)
        2.  [Category list](#orge395208)
    4.  [Setup](#orgce6e2b3)
    5.  [Evaluation criteria](#orgbc443ec)
        1.  [1. The end result](#org3725c8c)
        2.  [2. The quality of the code](#org802b5f6)

<a id="orga7eef6d"></a>

# CentralApp front-end technical test

<a id="org567d50a"></a>

## Goal

The goal of this technical test is to assess and vet the candidate's technical skills as a front-end developer. This includes his ability to use JavaScript, React, CSS and programming fundamentals.

<a id="org71e46d7"></a>

## Introduction

<a id="org51c598b"></a>

### Categories

CentralApp has a category system which is used to "categorise" businesses. Categories have two levels, L0 and L1.
The L0 categories are broad level segments, like Restaurant; however, an "Italian restaurant" is a more specific L1 category that is nested under the parent "Restaurant" (L0).

<a id="orgd2ace87"></a>

### An example of an L1 category <a id="org6f67385"></a>

    {
      "parent": {
        "parent": null,
        "path": "Restaurant",
        "slug": "restaurant",
        "name": "Restaurant",
        "id": 9009,
        "translations": {
          "ca": "Restaurant",
          "es": "Restaurante",
          "de": "Restaurant",
          "el": "Εστιατόριο",
          "pt": "Restaurante",
          "fr": "Restaurant",
          "nl": "Restaurant",
          "zh": "餐厅",
          "it": "Ristorante",
          "en": "Restaurant"
        },
        "level": 0
      },
      "path": "Restaurant/Szechuan Restaurant",
      "slug": "sichuan_restaurant",
      "name": "Szechuan Restaurant",
      "id": 420,
      "translations": {
        "ca": "Restaurant de cuina de Sichuan",
        "es": "Restaurante de cocina de Sichuan",
        "de": "Sichuanisches Restaurant",
        "el": "Εστιατόριο Σιτσουάν",
        "pt": "Restaurante especializado em gastronomia da região de Sichuan",
        "fr": "Restaurant de spécialités du Sichuan (Chine)",
        "nl": "Sichuan-restaurant",
        "zh": "川菜馆",
        "it": "Ristorante del Sichuan",
        "en": "Sichuan Restaurant"
      },
      "level": 1
    }

As you can see, this category has a `parent`; which in turn has no `parent` whatsoever.

Normally, any entity on CentralApp is only attached to L1 categories; and the parent categories are only used more broadly.

Now, we have the following API endpoints:

<a id="org33e5f83"></a>

### Default endpoint

    GET https://dev.centralapp.com/api/v2/static/categories/like?name=italian&language=en

<!-- https://apibeta.centralapp.com/ -->

The above endpoint will respond with `L1` categories, wherein the name's match the substring (the `name` query parameter). The language used to determine the match is the `language` parameter.

This endpoint also accepts a further `level` query parameter; which can be a comma separated list of category levels.

Thus:

<a id="orgfa71277"></a>

### Level 1 endpoint

    GET https://dev.centralapp.com/api/v2/static/categories/like?name=italian&language=en&level=L1

Will give you the same results as the above.
However, the following:

<a id="org4f327f8"></a>

### Level 0 endpoint

    GET https://dev.centralapp.com/api/v2/static/categories/like?name=italian&language=en&level=L0

Will only respond with the parent categories.

<a id="orgebf2be0"></a>

### Level 0, 1 endpoint <a id="orga409a9e"></a>

    GET https://dev.centralapp.com/api/v2/static/categories/like?name=italian&language=en&level=L0,L1

Will respond with both: the `L0` and `L1` categories

<a id="orgece5231"></a>

## Instructions

Build a React component that allow users to search for `categories` in CentralApp and select one of the results to add to a list of categories.
You can use any module you want to, except modules that directly fullfil the uinput + autocomplete role or the "list" role.

<a id="org0760481"></a>

### Search Input

- By typing into a text input, the user should be able to search for `categories` by their `name`.
- After typing 3 or more letters the user should receive a list of matching categories and be able to select 1 result to add to the list.
- Categories matching user input should be queried with an HTTP request to [1.2.6](#orga409a9e) endpoint.

<a id="orge395208"></a>

### Category list

- Display the `name` and the `path` of each selected categories in a list.
- Users should be able to remove categories from the list.
- Prevent users from selecting the same category multiple times.

<a id="orgce6e2b3"></a>

## Setup

Create a private repo; and commit your changes as you progress. Make sure the commits are granular and well commented so one can validate your progress.

<a id="orgbc443ec"></a>

## Evaluation criteria

The candidate will be evaluated based on:

<a id="org3725c8c"></a>

### 1. The end result

- Are all the functionalities present and working as expected?
- Is the UI aesthetically pleasing?
- Is the design responsive? Will it work on mobile?
- How good is the UX (keyboard handling, input focus, etc)
- (Bonus) Transitions/Animations
- Performance (perceived and actual)
- The app should work in the latest versions of Chrome and Firefox
- Can the application be structured as a multi-page application?

<a id="org802b5f6"></a>

### 2. The quality of the code

- Clean and frequent commits
- Clean and D.R.Y code
- Try to split up your code in as many components as it makes sense.
- Well commented code (the code you write is meant for computers as much as much as for humans)
- Smart use of ES6 features (classes, destructuring, imports, let/const, &#x2026;)
- Encapsulation of all the different parts and components
- Consistent coding style (pick a style and stick to it, you can use tools like ESLint if you want to)
