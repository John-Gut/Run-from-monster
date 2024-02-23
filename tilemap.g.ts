// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010304030405060708090a0b0c0304010102020202020202020202020202020101020d0d0d0d0d0d0d0d0d0d0d0d020101020d0d0d0d0d0d0d0d0d0d0d0d020101020d0d0d0d0d0d0d0d0d0d0d0d020101020d0d0d0d0d0d0d0d0d0d0d0d020101020d0d0d0d0d0d0d0d0d0d0d0d020101020d0d0d0d0d0d0d0d0d0d0d0d020101020d0d0d0d0d0d0d0d0d0d0d0d020101020d0d0d0d0d0d0d0d0d0d0d0d020101020d0d0d0d0d0d0d0d0d0d0d0d020101020d0d0d0d0d0d0d0d0d0d0d0d020101020d0d0d0d0d0d0d0d0d0d0d0d020101020d0d0d0d0d0d0d0d0d0d0d0d02010102020202020202020202020202020101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.hazardLava0,sprites.builtin.brick,sprites.builtin.crowd0,sprites.builtin.crowd1,sprites.builtin.crowd2,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd5,sprites.builtin.crowd6,sprites.builtin.crowd7,sprites.builtin.crowd8,sprites.builtin.crowd9,sprites.skillmap.islandTile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
