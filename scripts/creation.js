 
//funzione per la creazione di un albero
function albero(x, y, z) {
    var geo = new THREE.BoxGeometry(1, 1, 1);
    var loaderAl = new THREE.TextureLoader();
    var albero_pos = new THREE.Object3D();
    var textureLegno = new THREE.MeshPhongMaterial({ map: loaderAl.load('textures/wood.jpg') });
    var albero = new THREE.Group();
    var legno = new THREE.Mesh(geo, textureLegno);
    var textureFoglie = new THREE.MeshPhongMaterial({ map: loaderAl.load('textures/leaves.jpg') });
    var foglie = new THREE.Mesh(geo, textureFoglie);

    //OMBRE
    legno.castShadow = true;
    legno.receiveShadow = true;

    foglie.castShadow = true;
    foglie.receiveShadow = true;

    //TRONCO
    albero.add(legno.clone());
    legno.position.y += 1;
    albero.add(legno.clone());
    legno.position.y += 1;
    albero.add(legno.clone());
    legno.position.y += 1;

    //FOGLIE
    foglie.position.y += 3;
    albero.add(foglie.clone());
    foglie.position.z += 1;
    albero.add(foglie.clone());
    foglie.position.x += 1;
    albero.add(foglie.clone());
    foglie.position.z -= 1;
    albero.add(foglie.clone());
    foglie.position.z -= 1;
    albero.add(foglie.clone());
    foglie.position.x -= 1;
    albero.add(foglie.clone());
    foglie.position.x -= 1;
    albero.add(foglie.clone());
    foglie.position.z += 1;
    albero.add(foglie.clone());
    foglie.position.z += 1;
    albero.add(foglie.clone());
    foglie.position.x += 1;
    foglie.position.y += 1;
    albero.add(foglie.clone());
    foglie.position.x += 1;
    foglie.position.z -= 1;
    albero.add(foglie.clone());
    foglie.position.x -= 1;
    foglie.position.z -= 1;
    albero.add(foglie.clone());
    foglie.position.x -= 1;
    foglie.position.z += 1;
    albero.add(foglie.clone());
    foglie.position.x += 1;
    foglie.position.y += 1;
    albero.add(foglie.clone());

    // albero.position.x = x;
    // albero.position.y = y;
    // albero.position.z = z;

    albero_pos.add(albero);

    albero_pos.position.x = x;
    albero_pos.position.y = y;
    albero_pos.position.z = z;

    return albero_pos;

}

//funzione per la creazione di un cubo con texture tronco
function tronco(x, y, z) {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var loader = new THREE.TextureLoader();
    var materials = [
        new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture('textures/wood.jpg')
        }),
        new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture('textures/wood.jpg')
        }),
        new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture('textures/cutted_wood.jpg')
        }),
        new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture('textures/wood.jpg')
        }),
        new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture('textures/wood.jpg')
        }),
        new THREE.MeshPhongMaterial({
            map: THREE.ImageUtils.loadTexture('textures/wood.jpg')
        })
    ];

    var tronco = new THREE.Mesh(geometry, materials);
    var tronco_pos = new THREE.Object3D();
    tronco.castShadow = true;
    tronco.receiveShadow = true;

    tronco.position.x += x;
    tronco.position.y += y;
    tronco.position.z += z;
    tronco_pos.add(tronco);

    return tronco_pos;

}

//funzione per la crezione di una casa
function House(x, y, z) {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var loader = new THREE.TextureLoader();
    var materials_wall = new THREE.MeshPhongMaterial({
        map: loader.load('textures/wall.jpg')
    });

    var materials_roof = new THREE.MeshPhongMaterial({
        map: loader.load('textures/moss.jpg')
    });

    var muro = new THREE.Mesh(geometry, materials_roof);
    var roof = new THREE.Mesh(geometry, materials_wall);
    var casa = new THREE.Object3D();
    var casa_pos = new THREE.Object3D();

    muro.castShadow = true;
    muro.receiveShadow = true;

    roof.castShadow = true;
    roof.receiveShadow = true;

    //perimetro altezza1
    casa.add(muro.clone());
    muro.position.z += 1;
    casa.add(muro.clone());
    muro.position.z += 1;
    casa.add(muro.clone());
    muro.position.z += 1;
    casa.add(muro.clone());
    muro.position.z += 1;
    casa.add(muro.clone());
    muro.position.x += 1;
    casa.add(muro.clone());
    muro.position.x += 1;
    casa.add(muro.clone());
    muro.position.x += 1;
    casa.add(muro.clone());
    muro.position.x += 1;
    casa.add(muro.clone());
    muro.position.z -= 1;
    casa.add(muro.clone());
    muro.position.z -= 1;
    casa.add(muro.clone());
    muro.position.z -= 1;
    casa.add(muro.clone());
    muro.position.z -= 1;
    casa.add(muro.clone());
    muro.position.x -= 1;
    casa.add(muro.clone());
    muro.position.x -= 1;
    casa.add(muro.clone());
    muro.position.x -= 2;
    muro.position.y += 1;


    //perimetro altezza2
    casa.add(muro.clone());
    muro.position.z += 1;
    casa.add(muro.clone());
    muro.position.z += 2;
    casa.add(muro.clone());
    muro.position.z += 1;
    casa.add(muro.clone());
    muro.position.x += 1;
    casa.add(muro.clone());
    muro.position.x += 2;
    casa.add(muro.clone());
    muro.position.x += 1;
    casa.add(muro.clone());
    muro.position.z -= 1;
    casa.add(muro.clone());
    muro.position.z -= 2;
    casa.add(muro.clone());
    muro.position.z -= 1;
    casa.add(muro.clone());
    muro.position.x -= 2;
    casa.add(muro.clone());
    muro.position.x -= 2;
    muro.position.y += 1;

    //perimetro altezza3
    casa.add(muro.clone());
    muro.position.z += 1;
    casa.add(muro.clone());
    muro.position.z += 1;
    casa.add(muro.clone());
    muro.position.z += 1;
    casa.add(muro.clone());
    muro.position.z += 1;
    casa.add(muro.clone());
    muro.position.x += 1;
    casa.add(muro.clone());
    muro.position.x += 1;
    casa.add(muro.clone());
    muro.position.x += 1;
    casa.add(muro.clone());
    muro.position.x += 1;
    casa.add(muro.clone());
    muro.position.z -= 1;
    casa.add(muro.clone());
    muro.position.z -= 1;
    casa.add(muro.clone());
    muro.position.z -= 1;
    casa.add(muro.clone());
    muro.position.z -= 1;
    casa.add(muro.clone());
    muro.position.x -= 1;
    casa.add(muro.clone());
    muro.position.x -= 1;
    casa.add(muro.clone());
    muro.position.x -= 1;
    casa.add(muro.clone());

    muro.position.y += 1;
    casa.add(muro.clone());
    muro.position.z += 4;
    casa.add(muro.clone());
    muro.position.x += 1;
    casa.add(muro.clone());
    muro.position.z -= 4;
    casa.add(muro.clone());
    muro.position.x += 1;
    casa.add(muro.clone());
    muro.position.z += 4;
    casa.add(muro.clone());
    muro.position.x -= 1;
    muro.position.y += 1;
    casa.add(muro.clone());
    muro.position.z -= 4;
    casa.add(muro.clone());


    //codice per il tetto, molto brutto esteticamente ma se fatto a punta vengono TROPPI cubi

    roof.position.y += 2;
    roof.position.x -= 1;
    roof.position.z -= 1;

    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 7; j++) {
            casa.add(roof.clone());
            roof.position.y += 1;
            casa.add(roof.clone());
            roof.position.y -= 1;

            roof.position.x += 6 - 2 * i;
            casa.add(roof.clone());
            roof.position.y += 1;
            casa.add(roof.clone());


            roof.position.x -= 6 - 2 * i;
            roof.position.y -= 1;
            roof.position.z += 1;
        }
        roof.position.x += 1;
        roof.position.z -= 7;
        roof.position.y += 1;
    }
    for (var j = 0; j < 7; j++) {
        casa.add(roof.clone());
        roof.position.y += 1;
        casa.add(roof.clone());

        roof.position.y -= 1;
        roof.position.z += 1;
    }


    casa.position.x += x;
    casa.position.y += y;
    casa.position.z += z;
    //casa.rotation.y += Math.PI;
    casa_pos.add(casa);

    return casa_pos;

}

//funzione per la creazione di nuvole random
function nuvola(x, y, z) {
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var materialCloud = new THREE.MeshPhongMaterial({ color: 0xffffff });
    var cloudBox = new THREE.Mesh(geometry, materialCloud);
    var cloud = new THREE.Object3D();
    var numBoxCloud = Math.round(Math.random() * (20 - 8) + 8);
    // console.log(numBoxCloud);
    for (nBox = 0; nBox < numBoxCloud; nBox++) {
        cloud.add(cloudBox.clone());
        cloudBox.position.x = Math.floor(Math.random() * (2 - (-2)) + (-2));
        cloudBox.position.z = Math.floor(Math.random() * (2 - (-2)) + (-2));
    }
    cloud.position.set(x, y, z);
    return cloud;
}