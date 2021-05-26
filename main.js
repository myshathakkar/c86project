var canvas= new fabric.Canvas ('myCanvas');

width_block=30
height_block=30

player_x=10
player_y=10

player_object=""

function player_update(){
fabric.inage.fromURL("player",function(Img){
    player_object=Img
    player_object.scaletToWidth('150')
    player_object.scaleToHeight('140')
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object)
})
}
block_image_object=""
function new_image(get_image){
    fabric.inage.fromURL(get_image,function(Img){
        block_image_object=Img
        player_object.scaletToWidth(width_block)
        block_image_object.scaleToHeight(height_block)
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object)
    })
    }


