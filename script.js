const NativeUI = require('NativeUI'); 
const Textures = require('Textures');
const Materials = require('Materials'); 

Promise.all([
    Textures.findFirst('icon_empty'),
    Textures.findFirst('hip1'),
    Textures.findFirst('hip2'),
    Textures.findFirst('hip3'),
    Textures.findFirst('hip4'),
    Textures.findFirst('hip5'),
    Textures.findFirst('hip6'),
    Textures.findFirst('hip7'),
    Textures.findFirst('hip8'),
    Textures.findFirst('hip9'),
    Textures.findFirst('hip10'),
    Textures.findFirst('hip11'),
    Textures.findFirst('hip12'),
    Textures.findFirst('hip13'),
    Textures.findFirst('hip14'),
    Textures.findFirst('hip15'),

    Textures.findFirst('hip1tn'),
    Textures.findFirst('hip2tn'),
    Textures.findFirst('hip3tn'),
    Textures.findFirst('hip4tn'),
    Textures.findFirst('hip5tn'),
    Textures.findFirst('hip6tn'),
    Textures.findFirst('hip7tn'),
    Textures.findFirst('hip8tn'),
    Textures.findFirst('hip9tn'),
    Textures.findFirst('hip10tn'),
    Textures.findFirst('hip11tn'),
    Textures.findFirst('hip12tn'),
    Textures.findFirst('hip13tn'),
    Textures.findFirst('hip14tn'),
    Textures.findFirst('hip15tn'),
    /*Textures.findFirst('hip16'),
    Textures.findFirst('hip17'),
    Textures.findFirst('hip18'),
    Textures.findFirst('hip19'),
    Textures.findFirst('hip20'),
    Textures.findFirst('hip21'),
    Textures.findFirst('hip22'),*/
    Materials.findFirst('rating_m'),
]).then(function(results){ 
    const hip0 = results[0];
    const hip1 = results[1];
    const hip2 = results[2];
    const hip3 = results[3];
    const hip4 = results[4];
    const hip5 = results[5];
    const hip6 = results[6];
    const hip7 = results[7];
    const hip8 = results[8];
    const hip9 = results[9];
    const hip10 = results[10];
    const hip11 = results[11];
    const hip12 = results[12];
    const hip13 = results[13];
    const hip14 = results[14];
    const hip15 = results[15];

    const hip1tn = results[16];
    const hip2tn = results[17];
    const hip3tn = results[18];
    const hip4tn = results[19];
    const hip5tn = results[20];
    const hip6tn = results[21];
    const hip7tn = results[22];
    const hip8tn = results[23];
    const hip9tn = results[24];
    const hip10tn = results[25];
    const hip11tn = results[26];
    const hip12tn = results[27];
    const hip13tn = results[28];
    const hip14tn = results[29];
    const hip15tn = results[30];
    /*const hip16 = results[16];
    const hip17 = results[17];
    const hip18 = results[18];
    const hip19 = results[19];
    const hip20 = results[20];
    const hip21 = results[21];
    const hip22 = results[22];*/
    const rating_m = results[31];

    const picker = NativeUI.picker;


     const configuration = { 

         selectedIndex: 0,

         thumbs: [ 
             {image_texture: hip0}, 
             {image_texture: hip1}, 
             {image_texture: hip2}, 
             {image_texture: hip3}, 
             {image_texture: hip4}, 
             {image_texture: hip5}, 
             {image_texture: hip6}, 
             {image_texture: hip7}, 
             {image_texture: hip8}, 
             {image_texture: hip9}, 
             {image_texture: hip10}, 
             {image_texture: hip11},
             {image_texture: hip12}, 
             {image_texture: hip13}, 
             {image_texture: hip14}, 
             {image_texture: hip15}, 
             /*{image_texture: hip16}, 
             {image_texture: hip17}, 
             {image_texture: hip18}, 
             {image_texture: hip19}, 
             {image_texture: hip20}, 
             {image_texture: hip21}, 
             {image_texture: hip22},*/
         ],
         items: [
            {image_texture: hip0}, 
            {image_texture: hip1tn}, 
            {image_texture: hip2tn}, 
            {image_texture: hip3tn}, 
            {image_texture: hip4tn}, 
            {image_texture: hip5tn}, 
            {image_texture: hip6tn}, 
            {image_texture: hip7tn}, 
            {image_texture: hip8tn}, 
            {image_texture: hip9tn}, 
            {image_texture: hip10tn}, 
            {image_texture: hip11tn}, 
            {image_texture: hip12tn}, 
            {image_texture: hip13tn}, 
            {image_texture: hip14tn}, 
            {image_texture: hip15tn}, 
         ]


    };

    picker.configure(configuration);
    picker.visible = true;
    picker.selectedIndex.monitor().subscribe(function(index) {
    rating_m.diffuse = configuration.thumbs[index.newValue].image_texture;
    });

});

