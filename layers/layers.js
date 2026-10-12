var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MUNCIPALITYBOUNDARY_1 = new ol.format.GeoJSON();
var features_MUNCIPALITYBOUNDARY_1 = format_MUNCIPALITYBOUNDARY_1.readFeatures(json_MUNCIPALITYBOUNDARY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNCIPALITYBOUNDARY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNCIPALITYBOUNDARY_1.addFeatures(features_MUNCIPALITYBOUNDARY_1);
var lyr_MUNCIPALITYBOUNDARY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNCIPALITYBOUNDARY_1, 
                style: style_MUNCIPALITYBOUNDARY_1,
                popuplayertitle: 'MUNCIPALITY BOUNDARY',
                interactive: false,
                title: '<img src="styles/legend/MUNCIPALITYBOUNDARY_1.png" /> MUNCIPALITY BOUNDARY'
            });
var format_SOIL_2 = new ol.format.GeoJSON();
var features_SOIL_2 = format_SOIL_2.readFeatures(json_SOIL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOIL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOIL_2.addFeatures(features_SOIL_2);
var lyr_SOIL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOIL_2, 
                style: style_SOIL_2,
                popuplayertitle: 'SOIL',
                interactive: false,
    title: 'SOIL<br />\
    <img src="styles/legend/SOIL_2_0.png" /> Alluvial Soil<br />\
    <img src="styles/legend/SOIL_2_1.png" /> Hill Soil<br />\
    <img src="styles/legend/SOIL_2_2.png" /> <br />' });
var format_GEOLOGY_3 = new ol.format.GeoJSON();
var features_GEOLOGY_3 = format_GEOLOGY_3.readFeatures(json_GEOLOGY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_3.addFeatures(features_GEOLOGY_3);
var lyr_GEOLOGY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_3, 
                style: style_GEOLOGY_3,
                popuplayertitle: 'GEOLOGY',
                interactive: false,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_3_0.png" /> Charnockite group of rocks<br />\
    <img src="styles/legend/GEOLOGY_3_1.png" /> High grade metasedimentary rocks<br />\
    <img src="styles/legend/GEOLOGY_3_2.png" /> Metabasic and Ultra basic rocks<br />\
    <img src="styles/legend/GEOLOGY_3_3.png" /> Pegmatite/Aplite/Quartz vein<br />\
    <img src="styles/legend/GEOLOGY_3_4.png" /> Penisular Gneissic Complex<br />\
    <img src="styles/legend/GEOLOGY_3_5.png" /> <br />' });
var format_GEOMORPHOLOGY_4 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_4 = format_GEOMORPHOLOGY_4.readFeatures(json_GEOMORPHOLOGY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_4.addFeatures(features_GEOMORPHOLOGY_4);
var lyr_GEOMORPHOLOGY_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_4, 
                style: style_GEOMORPHOLOGY_4,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: false,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_0.png" /> Denudational Hills<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_1.png" /> Piedmont Zone<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_2.png" /> Residual Mount(Pediment)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_3.png" /> Valley<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_4.png" /> Valley Fill<br />\
    <img src="styles/legend/GEOMORPHOLOGY_4_5.png" /> <br />' });
var format_BUILTUP_5 = new ol.format.GeoJSON();
var features_BUILTUP_5 = format_BUILTUP_5.readFeatures(json_BUILTUP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILTUP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILTUP_5.addFeatures(features_BUILTUP_5);
var lyr_BUILTUP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUILTUP_5, 
                style: style_BUILTUP_5,
                popuplayertitle: 'BUILT UP',
                interactive: false,
                title: '<img src="styles/legend/BUILTUP_5.png" /> BUILT UP'
            });
var lyr_TOPOSHEET_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TOPOSHEET<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TOPOSHEET_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8484021.710992, 1304265.980958, 8494174.806961, 1323999.895792]
        })
    });
var lyr_SLOPE_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SLOPE<br />\
    <img src="styles/legend/SLOPE_7_0.png" /> 0.0000<br />\
    <img src="styles/legend/SLOPE_7_1.png" /> 5.3307<br />\
    <img src="styles/legend/SLOPE_7_2.png" /> 10.6614<br />\
    <img src="styles/legend/SLOPE_7_3.png" /> 15.9921<br />\
    <img src="styles/legend/SLOPE_7_4.png" /> 21.3228<br />\
    <img src="styles/legend/SLOPE_7_5.png" /> 26.6536<br />\
    <img src="styles/legend/SLOPE_7_6.png" /> 31.9843<br />\
    <img src="styles/legend/SLOPE_7_7.png" /> 36.9049<br />\
    <img src="styles/legend/SLOPE_7_8.png" /> 41.0055<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SLOPE_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8483960.953082, 1304262.699322, 8494153.925223, 1323995.936844]
        })
    });
var lyr_HILLSHADE_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HILL SHADE<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HILLSHADE_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8484044.919369, 1304307.375771, 8494063.673540, 1323950.605110]
        })
    });
var lyr_ELEVATIONZONATION_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'ELEVATION ZONATION<br />\
    <img src="styles/legend/ELEVATIONZONATION_9_0.png" /> <= 784<br />\
    <img src="styles/legend/ELEVATIONZONATION_9_1.png" /> 784 - 828<br />\
    <img src="styles/legend/ELEVATIONZONATION_9_2.png" /> 828 - 873<br />\
    <img src="styles/legend/ELEVATIONZONATION_9_3.png" /> 873 - 918<br />\
    <img src="styles/legend/ELEVATIONZONATION_9_4.png" /> 918 - 963<br />\
    <img src="styles/legend/ELEVATIONZONATION_9_5.png" /> 963 - 1007<br />\
    <img src="styles/legend/ELEVATIONZONATION_9_6.png" /> 1007 - 1049<br />\
    <img src="styles/legend/ELEVATIONZONATION_9_7.png" /> 1049 - 1083<br />\
    <img src="styles/legend/ELEVATIONZONATION_9_8.png" /> > 1083<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ELEVATIONZONATION_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8484044.919369, 1304307.375771, 8494063.673540, 1323950.605110]
        })
    });
var format_WARDBOUNDARY_10 = new ol.format.GeoJSON();
var features_WARDBOUNDARY_10 = format_WARDBOUNDARY_10.readFeatures(json_WARDBOUNDARY_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WARDBOUNDARY_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WARDBOUNDARY_10.addFeatures(features_WARDBOUNDARY_10);
var lyr_WARDBOUNDARY_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WARDBOUNDARY_10, 
                style: style_WARDBOUNDARY_10,
                popuplayertitle: 'WARD BOUNDARY',
                interactive: false,
                title: '<img src="styles/legend/WARDBOUNDARY_10.png" /> WARD BOUNDARY'
            });
var format_DRAINAGE_11 = new ol.format.GeoJSON();
var features_DRAINAGE_11 = format_DRAINAGE_11.readFeatures(json_DRAINAGE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_11.addFeatures(features_DRAINAGE_11);
var lyr_DRAINAGE_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_11, 
                style: style_DRAINAGE_11,
                popuplayertitle: 'DRAINAGE',
                interactive: false,
                title: '<img src="styles/legend/DRAINAGE_11.png" /> DRAINAGE'
            });
var format_ROAD_12 = new ol.format.GeoJSON();
var features_ROAD_12 = format_ROAD_12.readFeatures(json_ROAD_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_12.addFeatures(features_ROAD_12);
var lyr_ROAD_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_12, 
                style: style_ROAD_12,
                popuplayertitle: 'ROAD',
                interactive: false,
                title: '<img src="styles/legend/ROAD_12.png" /> ROAD'
            });
var format_CONTOUR_13 = new ol.format.GeoJSON();
var features_CONTOUR_13 = format_CONTOUR_13.readFeatures(json_CONTOUR_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_13.addFeatures(features_CONTOUR_13);
var lyr_CONTOUR_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_13, 
                style: style_CONTOUR_13,
                popuplayertitle: 'CONTOUR',
                interactive: false,
                title: '<img src="styles/legend/CONTOUR_13.png" /> CONTOUR'
            });
var format_OTHERLOCATION_14 = new ol.format.GeoJSON();
var features_OTHERLOCATION_14 = format_OTHERLOCATION_14.readFeatures(json_OTHERLOCATION_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTHERLOCATION_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTHERLOCATION_14.addFeatures(features_OTHERLOCATION_14);
var lyr_OTHERLOCATION_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OTHERLOCATION_14, 
                style: style_OTHERLOCATION_14,
                popuplayertitle: 'OTHER LOCATION',
                interactive: false,
                title: '<img src="styles/legend/OTHERLOCATION_14.png" /> OTHER LOCATION'
            });
var format_GOVERNMENTOFFICES_15 = new ol.format.GeoJSON();
var features_GOVERNMENTOFFICES_15 = format_GOVERNMENTOFFICES_15.readFeatures(json_GOVERNMENTOFFICES_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GOVERNMENTOFFICES_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GOVERNMENTOFFICES_15.addFeatures(features_GOVERNMENTOFFICES_15);
var lyr_GOVERNMENTOFFICES_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GOVERNMENTOFFICES_15, 
                style: style_GOVERNMENTOFFICES_15,
                popuplayertitle: 'GOVERNMENT OFFICES',
                interactive: false,
                title: '<img src="styles/legend/GOVERNMENTOFFICES_15.png" /> GOVERNMENT OFFICES'
            });
var format_AKSHAYACENTRE_16 = new ol.format.GeoJSON();
var features_AKSHAYACENTRE_16 = format_AKSHAYACENTRE_16.readFeatures(json_AKSHAYACENTRE_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AKSHAYACENTRE_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AKSHAYACENTRE_16.addFeatures(features_AKSHAYACENTRE_16);
var lyr_AKSHAYACENTRE_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AKSHAYACENTRE_16, 
                style: style_AKSHAYACENTRE_16,
                popuplayertitle: 'AKSHAYA CENTRE',
                interactive: false,
                title: '<img src="styles/legend/AKSHAYACENTRE_16.png" /> AKSHAYA CENTRE'
            });
var format_ANGANAWADI_17 = new ol.format.GeoJSON();
var features_ANGANAWADI_17 = format_ANGANAWADI_17.readFeatures(json_ANGANAWADI_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANGANAWADI_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANGANAWADI_17.addFeatures(features_ANGANAWADI_17);
var lyr_ANGANAWADI_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANGANAWADI_17, 
                style: style_ANGANAWADI_17,
                popuplayertitle: 'ANGANAWADI',
                interactive: false,
                title: '<img src="styles/legend/ANGANAWADI_17.png" /> ANGANAWADI'
            });
var format_BANK_18 = new ol.format.GeoJSON();
var features_BANK_18 = format_BANK_18.readFeatures(json_BANK_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANK_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANK_18.addFeatures(features_BANK_18);
var lyr_BANK_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANK_18, 
                style: style_BANK_18,
                popuplayertitle: 'BANK',
                interactive: false,
                title: '<img src="styles/legend/BANK_18.png" /> BANK'
            });
var format_HEALTHCENTRE_19 = new ol.format.GeoJSON();
var features_HEALTHCENTRE_19 = format_HEALTHCENTRE_19.readFeatures(json_HEALTHCENTRE_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HEALTHCENTRE_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HEALTHCENTRE_19.addFeatures(features_HEALTHCENTRE_19);
var lyr_HEALTHCENTRE_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HEALTHCENTRE_19, 
                style: style_HEALTHCENTRE_19,
                popuplayertitle: 'HEALTH CENTRE',
                interactive: false,
                title: '<img src="styles/legend/HEALTHCENTRE_19.png" /> HEALTH CENTRE'
            });
var format_JUNCTION_20 = new ol.format.GeoJSON();
var features_JUNCTION_20 = format_JUNCTION_20.readFeatures(json_JUNCTION_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JUNCTION_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUNCTION_20.addFeatures(features_JUNCTION_20);
var lyr_JUNCTION_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JUNCTION_20, 
                style: style_JUNCTION_20,
                popuplayertitle: 'JUNCTION',
                interactive: false,
                title: '<img src="styles/legend/JUNCTION_20.png" /> JUNCTION'
            });
var format_MAJORLOCATION_21 = new ol.format.GeoJSON();
var features_MAJORLOCATION_21 = format_MAJORLOCATION_21.readFeatures(json_MAJORLOCATION_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAJORLOCATION_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAJORLOCATION_21.addFeatures(features_MAJORLOCATION_21);
var lyr_MAJORLOCATION_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAJORLOCATION_21, 
                style: style_MAJORLOCATION_21,
                popuplayertitle: 'MAJOR LOCATION',
                interactive: false,
                title: '<img src="styles/legend/MAJORLOCATION_21.png" /> MAJOR LOCATION'
            });
var format_RATIONSHOP_22 = new ol.format.GeoJSON();
var features_RATIONSHOP_22 = format_RATIONSHOP_22.readFeatures(json_RATIONSHOP_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RATIONSHOP_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RATIONSHOP_22.addFeatures(features_RATIONSHOP_22);
var lyr_RATIONSHOP_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RATIONSHOP_22, 
                style: style_RATIONSHOP_22,
                popuplayertitle: 'RATIONSHOP',
                interactive: false,
                title: '<img src="styles/legend/RATIONSHOP_22.png" /> RATIONSHOP'
            });
var format_SAMSKARIKANILAYAM_23 = new ol.format.GeoJSON();
var features_SAMSKARIKANILAYAM_23 = format_SAMSKARIKANILAYAM_23.readFeatures(json_SAMSKARIKANILAYAM_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAMSKARIKANILAYAM_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAMSKARIKANILAYAM_23.addFeatures(features_SAMSKARIKANILAYAM_23);
var lyr_SAMSKARIKANILAYAM_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAMSKARIKANILAYAM_23, 
                style: style_SAMSKARIKANILAYAM_23,
                popuplayertitle: 'SAMSKARIKANILAYAM',
                interactive: false,
                title: '<img src="styles/legend/SAMSKARIKANILAYAM_23.png" /> SAMSKARIKANILAYAM'
            });
var format_SCHOOL_24 = new ol.format.GeoJSON();
var features_SCHOOL_24 = format_SCHOOL_24.readFeatures(json_SCHOOL_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCHOOL_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCHOOL_24.addFeatures(features_SCHOOL_24);
var lyr_SCHOOL_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCHOOL_24, 
                style: style_SCHOOL_24,
                popuplayertitle: 'SCHOOL',
                interactive: false,
                title: '<img src="styles/legend/SCHOOL_24.png" /> SCHOOL'
            });
var format_WARDNAME_25 = new ol.format.GeoJSON();
var features_WARDNAME_25 = format_WARDNAME_25.readFeatures(json_WARDNAME_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WARDNAME_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WARDNAME_25.addFeatures(features_WARDNAME_25);
var lyr_WARDNAME_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WARDNAME_25, 
                style: style_WARDNAME_25,
                popuplayertitle: 'WARD NAME',
                interactive: true,
    title: 'WARD NAME<br />\
    <img src="styles/legend/WARDNAME_25_0.png" /> ARAM MILE<br />\
    <img src="styles/legend/WARDNAME_25_1.png" /> ARMAD<br />\
    <img src="styles/legend/WARDNAME_25_2.png" /> BEENACHI<br />\
    <img src="styles/legend/WARDNAME_25_3.png" /> C-KUNNU<br />\
    <img src="styles/legend/WARDNAME_25_4.png" /> CHEENAPULLU<br />\
    <img src="styles/legend/WARDNAME_25_5.png" /> CHENAD<br />\
    <img src="styles/legend/WARDNAME_25_6.png" /> CHEROORKUNNU<br />\
    <img src="styles/legend/WARDNAME_25_7.png" /> CHETHALAYAM<br />\
    <img src="styles/legend/WARDNAME_25_8.png" /> DHOTTAPPANKULAM<br />\
    <img src="styles/legend/WARDNAME_25_9.png" /> FAIRLAND<br />\
    <img src="styles/legend/WARDNAME_25_10.png" /> KAIPPANCHERI<br />\
    <img src="styles/legend/WARDNAME_25_11.png" /> KAIVETTAMOOLA<br />\
    <img src="styles/legend/WARDNAME_25_12.png" /> KALLUVAYAL<br />\
    <img src="styles/legend/WARDNAME_25_13.png" /> KARUVALLIKUNNU<br />\
    <img src="styles/legend/WARDNAME_25_14.png" /> KATTAYAD<br />\
    <img src="styles/legend/WARDNAME_25_15.png" /> KIDANGIL<br />\
    <img src="styles/legend/WARDNAME_25_16.png" /> KOTTAKUNNU<br />\
    <img src="styles/legend/WARDNAME_25_17.png" /> KUPPADI<br />\
    <img src="styles/legend/WARDNAME_25_18.png" /> MAITHANIKUNNU<br />\
    <img src="styles/legend/WARDNAME_25_19.png" /> MANICHIRA<br />\
    <img src="styles/legend/WARDNAME_25_20.png" /> MANTHAMKOLLI<br />\
    <img src="styles/legend/WARDNAME_25_21.png" /> MANTHANDIKUNNU<br />\
    <img src="styles/legend/WARDNAME_25_22.png" /> ODAPPALLAM<br />\
    <img src="styles/legend/WARDNAME_25_23.png" /> PALAKKARA<br />\
    <img src="styles/legend/WARDNAME_25_24.png" /> PALLIKANDI<br />\
    <img src="styles/legend/WARDNAME_25_25.png" /> PAZHERY<br />\
    <img src="styles/legend/WARDNAME_25_26.png" /> PAZHUPPATHUR<br />\
    <img src="styles/legend/WARDNAME_25_27.png" /> POOMALA<br />\
    <img src="styles/legend/WARDNAME_25_28.png" /> POOTHIKKADU<br />\
    <img src="styles/legend/WARDNAME_25_29.png" /> SATHRAMKUNNU<br />\
    <img src="styles/legend/WARDNAME_25_30.png" /> SULTHAN BATHERY<br />\
    <img src="styles/legend/WARDNAME_25_31.png" /> THELAMBATTA<br />\
    <img src="styles/legend/WARDNAME_25_32.png" /> THIRUNELLY<br />\
    <img src="styles/legend/WARDNAME_25_33.png" /> THODUVETTY<br />\
    <img src="styles/legend/WARDNAME_25_34.png" /> VENGOOR NORTH<br />\
    <img src="styles/legend/WARDNAME_25_35.png" /> VENGOOR SOUTH<br />\
    <img src="styles/legend/WARDNAME_25_36.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_MUNCIPALITYBOUNDARY_1.setVisible(true);lyr_SOIL_2.setVisible(true);lyr_GEOLOGY_3.setVisible(true);lyr_GEOMORPHOLOGY_4.setVisible(true);lyr_BUILTUP_5.setVisible(true);lyr_TOPOSHEET_6.setVisible(true);lyr_SLOPE_7.setVisible(true);lyr_HILLSHADE_8.setVisible(true);lyr_ELEVATIONZONATION_9.setVisible(true);lyr_WARDBOUNDARY_10.setVisible(true);lyr_DRAINAGE_11.setVisible(true);lyr_ROAD_12.setVisible(true);lyr_CONTOUR_13.setVisible(true);lyr_OTHERLOCATION_14.setVisible(true);lyr_GOVERNMENTOFFICES_15.setVisible(true);lyr_AKSHAYACENTRE_16.setVisible(true);lyr_ANGANAWADI_17.setVisible(true);lyr_BANK_18.setVisible(true);lyr_HEALTHCENTRE_19.setVisible(true);lyr_JUNCTION_20.setVisible(true);lyr_MAJORLOCATION_21.setVisible(true);lyr_RATIONSHOP_22.setVisible(true);lyr_SAMSKARIKANILAYAM_23.setVisible(true);lyr_SCHOOL_24.setVisible(true);lyr_WARDNAME_25.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MUNCIPALITYBOUNDARY_1,lyr_SOIL_2,lyr_GEOLOGY_3,lyr_GEOMORPHOLOGY_4,lyr_BUILTUP_5,lyr_TOPOSHEET_6,lyr_SLOPE_7,lyr_HILLSHADE_8,lyr_ELEVATIONZONATION_9,lyr_WARDBOUNDARY_10,lyr_DRAINAGE_11,lyr_ROAD_12,lyr_CONTOUR_13,lyr_OTHERLOCATION_14,lyr_GOVERNMENTOFFICES_15,lyr_AKSHAYACENTRE_16,lyr_ANGANAWADI_17,lyr_BANK_18,lyr_HEALTHCENTRE_19,lyr_JUNCTION_20,lyr_MAJORLOCATION_21,lyr_RATIONSHOP_22,lyr_SAMSKARIKANILAYAM_23,lyr_SCHOOL_24,lyr_WARDNAME_25];
lyr_MUNCIPALITYBOUNDARY_1.set('fieldAliases', {'id': 'id', });
lyr_SOIL_2.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SOIL': 'SOIL', });
lyr_GEOLOGY_3.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_GEOMORPHOLOGY_4.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_BUILTUP_5.set('fieldAliases', {'source': 'source', 'height': 'height', });
lyr_WARDBOUNDARY_10.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_DRAINAGE_11.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_ROAD_12.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_CONTOUR_13.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_OTHERLOCATION_14.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_GOVERNMENTOFFICES_15.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_AKSHAYACENTRE_16.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_ANGANAWADI_17.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_BANK_18.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_HEALTHCENTRE_19.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_JUNCTION_20.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_MAJORLOCATION_21.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_RATIONSHOP_22.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_SAMSKARIKANILAYAM_23.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_SCHOOL_24.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_WARDNAME_25.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_MUNCIPALITYBOUNDARY_1.set('fieldImages', {'id': 'TextEdit', });
lyr_SOIL_2.set('fieldImages', {'id': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'SOIL': 'TextEdit', });
lyr_GEOLOGY_3.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_GEOMORPHOLOGY_4.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_BUILTUP_5.set('fieldImages', {'source': 'TextEdit', 'height': 'TextEdit', });
lyr_WARDBOUNDARY_10.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_DRAINAGE_11.set('fieldImages', {'ORDER1': 'Range', });
lyr_ROAD_12.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_CONTOUR_13.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_OTHERLOCATION_14.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_GOVERNMENTOFFICES_15.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_AKSHAYACENTRE_16.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_ANGANAWADI_17.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_BANK_18.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_HEALTHCENTRE_19.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_JUNCTION_20.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_MAJORLOCATION_21.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_RATIONSHOP_22.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_SAMSKARIKANILAYAM_23.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_SCHOOL_24.set('fieldImages', {'osm_id': '', 'name': '', 'barrier': '', 'highway': '', 'ref': '', 'address': '', 'is_in': '', 'place': '', 'man_made': '', 'other_tags': '', });
lyr_WARDNAME_25.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_MUNCIPALITYBOUNDARY_1.set('fieldLabels', {'id': 'no label', });
lyr_SOIL_2.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'SOIL': 'no label', });
lyr_GEOLOGY_3.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_GEOMORPHOLOGY_4.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_BUILTUP_5.set('fieldLabels', {'source': 'inline label - visible with data', 'height': 'no label', });
lyr_WARDBOUNDARY_10.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'header label - visible with data', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_DRAINAGE_11.set('fieldLabels', {'ORDER1': 'no label', });
lyr_ROAD_12.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_CONTOUR_13.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_OTHERLOCATION_14.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_GOVERNMENTOFFICES_15.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_AKSHAYACENTRE_16.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_ANGANAWADI_17.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_BANK_18.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_HEALTHCENTRE_19.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_JUNCTION_20.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_MAJORLOCATION_21.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_RATIONSHOP_22.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_SAMSKARIKANILAYAM_23.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_SCHOOL_24.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'barrier': 'no label', 'highway': 'no label', 'ref': 'no label', 'address': 'no label', 'is_in': 'no label', 'place': 'no label', 'man_made': 'no label', 'other_tags': 'no label', });
lyr_WARDNAME_25.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'no label', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_WARDNAME_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});