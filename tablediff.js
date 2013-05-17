/**
    tablediff.js
    Copyright (C) 2013 - Luís A. Bastião Silva and Universidade de Aveiro

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


tablediff = function(list_ids)
{
	
	var table = ""
	table += "<table class='table'>";
	table += "<thead>";
	table += "<tr>";
	for (var i = 0; i<list_ids.length; i++ )
	{
		table += "<td class='success'>TEST</td>";
	}

	table += "</tr>";
	table += "</thead>";

	table += "<tbody>";
	table += "<tr class='success'>";
	for (var i = 0; i<list_ids.length; i++ )
	{
		table += "<td class='success'>TEST</td>";

	}
	table += "</tr>";
	table += "<tr class='error'>";
	for (var i = 0; i<list_ids.length; i++ )
	{
		table += "<td class='error'>TEST</td>";

	}
	table += "</tr>";


	table += "<tr class='warning'>";
	for (var i = 0; i<list_ids.length; i++ )
	{
		table += "<td class='warning'>TEST</td>";

	}
	table += "</tr>";

	table += "</tbody>";
	table += "</table>";

	$("#content").append(table);
	//$("#content").append(JsDiff.diffCss("test", "test"));
	$("#content").append(diffString("tesdasdasst", "tesdasdast"));


};

$(function(){
   tablediff([1,2]);
});

buildtable = function()
{

}


comparetable = function()
{


}

compareline = function ()
{


}


// List 