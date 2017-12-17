/*
 * main.js
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
(function(){
    console.log("start")
    
    function Vector(_x,_y){
        this.x = _x;
        this.y = _y;
    }
    
    Vector.prototype.plus = function(_other){
        return new Vector(this.x+_other.x,this.y+_other.y)
    }
    
    function Grid(_width,_height){
        this.space = new Array(_width * _height);
        this.width = _width;
        this.height = _height;
    }
    
    Grid.prototype.isInside = function(_vector){
        if(_vector.x <0){return false}
        if(_vector.y<0){return false}
        if(_vector.x>=this.width){return false};
        if(_vector.y>=this.height){return false};
        return true
    }

    Grid.prototype.get = function(_vector){
        return this.space[_vector.x + this.width * _vector.y]
    }
    
    Grid.prototype.set = function(_vector,value){
        return this.space[_vector.x + this.width * _vector.y] = value
    }
    
    Grid.prototype.log = function(_vector) {
          console.log(
            this.get(_vector) + ' site...'
          );
          return this;
        };

    
    test = new Grid(10,10) 
    test.set(new Vector(5,5),10)
    test.log(new Vector(5,5))
    
})();
