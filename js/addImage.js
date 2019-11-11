var imgs = $('.grid-images')

for(var i=12;i<23;i++){

  for(var j=15;j<25;j++){
      imgs[(i-12)*10+(j-15)].src='final/'+(i+1)+' ('+(j+1)+').jpg'
    }
}
