/*
 * vector.js
 * 
 * Copyright 2017 Dr Ric Colasanti <pi@raspberry>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 * 
 * 
 */
 
 (function() {
     
    // This function os only visable from with in this module 
    function addNothing(value){
        return value;
    }


    function Vector(_x,_y){
        this.x = addNothing(_x);
        this.y = _y;
        return Vector;
    }
    
    Vector.prototype.plus = function(_other){
        return new Vector(this.x+_other.x,this.y+_other.y)
    }

  // export is ont avalable client side nust import with <script>  
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Vector;
  else
    window.Vector = Vector;
})();
 
 



