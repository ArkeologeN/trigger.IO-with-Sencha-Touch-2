/* 
 *  Copyright (c) 2012. All Rights Reserved. The PlumTree Group
 *  Code is under development state at The PlumTree Group written by
 *  Hamza Waqas (Mobile Application Developer) at Karachi from MacOSX
 */


Ext.define("OnNotes.controller.Notes",{
    extend: "Ext.app.Controller",
    config: {
        refs: {
            notesListContainer: "noteslistcontainer",
            noteEditor:         "noteeditor"
        },
        control: {
            notesListContainer: {
                newNoteCommand: "onNewNoteCommand",
                editNoteCommand: "onEditNoteCommand"
            }
        }
    },
    
    onNewNoteCommand: function() {
        console.log("onNewNoteCommand");
        var now = new Date();
        var noteId = (now.getTime()).toString() + (this.getRandomInt(0,100)).toString();
        
        var newNote = Ext.create("OnNotes.model.Note", {
            id: "noteId",
            dateCreated: now,
            title: "",
            narrative: ""
        });
        
        this.activateNoteEditor(newNote);
    },
    onEditNoteCommand: function(list,record) {
        this.activateNodeEditor(record);
    },
    launch: function() {
        this.callParent(arguments);
        Ext.getStore('Notes').load();
        console.log("Launch");
    },
    init: function() {
        this.callParent(arguments);
        console.log("Init");
    },
    getRandomInt: function(min,max) {
        return Math.floor(Math.random() * (min - max + 1)) + min;
    },
    activateNoteEditor: function(record) {
        var noteEditor = this.getNoteEditor();
        //console.log(noteEditor);
        noteEditor.setRecord(record);
        Ext.Viewport.animateActiveItem(noteEditor,this.slideLeftTransition);
    },
    slideLeftTransition: {type: "slide", direction: "left"}
});