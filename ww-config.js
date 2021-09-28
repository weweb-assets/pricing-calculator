function createPlan(index){
    return {
        [`plan${index}HeaderObjects`]:{
            hidden: true,
            defaultValue: []
        },
        [`plan${index}MainObjects`]:{
            hidden: true,
            defaultValue: []
        },
        [`plan${index}BackgroundColor`]: {
            section: 'settings',
            label: { "en": `Plan ${index + 1} background`, "fr": `Plan ${index + 1} arrière plan` },
            type: "Color",
            defaultValue: '#FFFFFF'
        },
        [`plan${index}Color`]: {
            section: 'settings',
            label: { "en": `Plan ${index + 1} color`, "fr": `Plan ${index + 1} couleur` },
            type: "Color",
            defaultValue: '#000000'
        },
        [`plan${index}FontSize`]: {
            section: 'settings',
            label: { "en": `Plan ${index + 1} size`, "fr": `Plan ${index + 1} taille` },
            type: "Number",
            defaultValue: 30
        },
        [`plan${index}PriceMonth`]: {
            section: 'settings',
            label: {  "en": `Plan ${index + 1} /month`, "fr": `Plan ${index + 1} /mois` },
            type: "Number",
            defaultValue: 19
        },
        [`plan${index}PriceYear`]: {
            section: 'settings',
            label: {  "en": `Plan ${index + 1} /year`, "fr": `Plan ${index + 1} /an` },
            type: "Number",
            defaultValue: 99
        },
    }
}


export default {
    editor: {
        label: { en: 'Pricing Calculator'},
        icon: 'fontawesome/solid/hand-holding-usd',
    },
    properties: {
        headerObjects: {
            hidden : true,
            defaultValue: []
        },
        mainColor: {
            section: 'settings',
            "label": { "en": "Main Color", "fr": "Couleur" },
            "type": "Color",
            defaultValue: '#5F30E2'
        },
        scrollBarText: {
            "label": { "en": "ScrollBar Text", "fr": "Texte sur Barre" },
            "type": "Text",
            "options": {
                "placeholder": "User"
            },
            defaultValue: "User"
        },
        devise: {
            section: 'settings',
            "label": { "en": "Devise", "fr": "Devise" },
            "type": "Text",
            "options": {
                "placeholder": "$"
            },
            defaultValue: '$'
        },
        ...createPlan(0),
        ...createPlan(1),
        ...createPlan(2),
        ...createPlan(3),
    }

}