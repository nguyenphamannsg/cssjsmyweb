jQuery(document).ready(function(){jQuery("#add-event").submit(function(){alert("Submitted");var e={};$.each($("#add-event").serializeArray(),function(l,t){e[t.name]=t.value}),console.log(e)})}),function(){"use strict";jQuery(function(){jQuery("#calendar").fullCalendar({themeSystem:"bootstrap4",businessHours:!1,defaultView:"month",editable:!0,header:{left:"title",center:"month,agendaWeek,agendaDay",right:"today prev,next"},events:[{title:"Barber",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",start:"2020-05-05",end:"2020-05-05",className:"fc-bg-default",icon:"circle"},{title:"Flight Paris",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",start:"2020-08-08T14:00:00",end:"2020-08-08T20:00:00",className:"fc-bg-deepskyblue",icon:"cog",allDay:!1},{title:"Team Meeting",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",start:"2020-07-10T13:00:00",end:"2020-07-10T16:00:00",className:"fc-bg-pinkred",icon:"group",allDay:!1},{title:"Meeting",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",start:"2020-08-12",className:"fc-bg-lightgreen",icon:"suitcase"},{title:"Conference",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",start:"2020-08-13",end:"2020-08-15",className:"fc-bg-blue",icon:"calendar"},{title:"Baby Shower",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",start:"2020-08-13",end:"2020-08-14",className:"fc-bg-default",icon:"child"},{title:"Birthday",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",start:"2020-09-13",end:"2020-09-14",className:"fc-bg-default",icon:"birthday-cake"},{title:"Restaurant",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",start:"2020-10-15T09:30:00",end:"2020-10-15T11:45:00",className:"fc-bg-default",icon:"glass",allDay:!1},{title:"Dinner",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",start:"2020-11-15T20:00:00",end:"2020-11-15T22:30:00",className:"fc-bg-default",icon:"cutlery",allDay:!1},{title:"Shooting",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",start:"2020-08-25",end:"2020-08-25",className:"fc-bg-blue",icon:"camera"},{title:"Go Space :)",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",start:"2020-12-27",end:"2020-12-27",className:"fc-bg-default",icon:"rocket"},{title:"Dentist",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pellentesque nibh. In nisl nulla, convallis ac nulla eget, pellentesque pellentesque magna.",start:"2020-12-29T11:30:00",end:"2020-12-29T012:30:00",className:"fc-bg-blue",icon:"medkit",allDay:!1}],dayClick:function(){jQuery("#modal-view-event-add").modal()},eventClick:function(e,l,t){jQuery(".event-icon").html("<i class='fa fa-"+e.icon+"'></i>"),jQuery(".event-title").html(e.title),jQuery(".event-body").html(e.description),jQuery(".eventUrl").attr("href",e.url),jQuery("#modal-view-event").modal()}})})}(jQuery);
