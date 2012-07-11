/* 
 *  Copyright (c) 2012. All Rights Reserved. The PlumTree Group
 *  Code is under development state at The PlumTree Group written by
 *  Hamza Waqas (Mobile Application Developer) at Karachi from MacOSX
 */


Ext.define("OnNotes.store.Notes", {
    extend: "Ext.data.Store",
    requires: ["Ext.data.proxy.LocalStorage"],
    config: {
        model: "OnNotes.model.Note",
        proxy: {
            type: "localstorage",
            id:   "notes-app-store"
        },
        /*
        data: [
            { title: "Note 1", narrative: "narrative 1"},
            { title: "Note 2", narrative: "narrative 2"},
            { title: "Note 3", narrative: "narrative 3"},
            { title: "Note 4", narrative: "narrative 4"},
            { title: "Note 5", narrative: "narrative 5"},
            { title: "Note 6", narrative: "narrative 6"},
            { title: "Note 7", narrative: "narrative 7"},
            
        ],*/
        sorter: [{property: "dateCreated", direction: "DESC"}]
    }
});