ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32614").setExtent([478568.388824, 2143981.190780, 493153.792003, 2155407.861673]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AlcaldaCuauhtmoc_1 = new ol.format.GeoJSON();
var features_AlcaldaCuauhtmoc_1 = format_AlcaldaCuauhtmoc_1.readFeatures(json_AlcaldaCuauhtmoc_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_AlcaldaCuauhtmoc_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlcaldaCuauhtmoc_1.addFeatures(features_AlcaldaCuauhtmoc_1);
var lyr_AlcaldaCuauhtmoc_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AlcaldaCuauhtmoc_1, 
                style: style_AlcaldaCuauhtmoc_1,
                interactive: true,
                title: '<img src="styles/legend/AlcaldaCuauhtmoc_1.png" /> Alcaldía Cuauhtémoc'
            });
var format_Metrobus_2 = new ol.format.GeoJSON();
var features_Metrobus_2 = format_Metrobus_2.readFeatures(json_Metrobus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Metrobus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metrobus_2.addFeatures(features_Metrobus_2);
var lyr_Metrobus_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Metrobus_2, 
                style: style_Metrobus_2,
                interactive: true,
    title: 'Metrobus<br />\
    <img src="styles/legend/Metrobus_2_0.png" /> 1<br />\
    <img src="styles/legend/Metrobus_2_1.png" /> 2<br />\
    <img src="styles/legend/Metrobus_2_2.png" /> 3<br />\
    <img src="styles/legend/Metrobus_2_3.png" /> 4<br />\
    <img src="styles/legend/Metrobus_2_4.png" /> 7<br />\
    <img src="styles/legend/Metrobus_2_5.png" /> <br />'
        });
var format_Metro_3 = new ol.format.GeoJSON();
var features_Metro_3 = format_Metro_3.readFeatures(json_Metro_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_Metro_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Metro_3.addFeatures(features_Metro_3);
var lyr_Metro_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Metro_3, 
                style: style_Metro_3,
                interactive: true,
    title: 'Metro<br />\
    <img src="styles/legend/Metro_3_0.png" /> 1<br />\
    <img src="styles/legend/Metro_3_1.png" /> 2<br />\
    <img src="styles/legend/Metro_3_2.png" /> 3<br />\
    <img src="styles/legend/Metro_3_3.png" /> 5<br />\
    <img src="styles/legend/Metro_3_4.png" /> 8<br />\
    <img src="styles/legend/Metro_3_5.png" /> 9<br />\
    <img src="styles/legend/Metro_3_6.png" /> B<br />'
        });
var format_EstacionesMetrobus_4 = new ol.format.GeoJSON();
var features_EstacionesMetrobus_4 = format_EstacionesMetrobus_4.readFeatures(json_EstacionesMetrobus_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_EstacionesMetrobus_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesMetrobus_4.addFeatures(features_EstacionesMetrobus_4);
var lyr_EstacionesMetrobus_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstacionesMetrobus_4, 
                style: style_EstacionesMetrobus_4,
                interactive: true,
    title: 'Estaciones Metrobus<br />\
    <img src="styles/legend/EstacionesMetrobus_4_0.png" /> 01<br />\
    <img src="styles/legend/EstacionesMetrobus_4_1.png" /> 02<br />\
    <img src="styles/legend/EstacionesMetrobus_4_2.png" /> 03<br />\
    <img src="styles/legend/EstacionesMetrobus_4_3.png" /> 04<br />\
    <img src="styles/legend/EstacionesMetrobus_4_4.png" /> 07<br />\
    <img src="styles/legend/EstacionesMetrobus_4_5.png" /> <br />'
        });
var format_EstacionesMetro_5 = new ol.format.GeoJSON();
var features_EstacionesMetro_5 = format_EstacionesMetro_5.readFeatures(json_EstacionesMetro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32614'});
var jsonSource_EstacionesMetro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesMetro_5.addFeatures(features_EstacionesMetro_5);
var lyr_EstacionesMetro_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstacionesMetro_5, 
                style: style_EstacionesMetro_5,
                interactive: true,
    title: 'Estaciones Metro<br />\
    <img src="styles/legend/EstacionesMetro_5_0.png" /> 01<br />\
    <img src="styles/legend/EstacionesMetro_5_1.png" /> 02<br />\
    <img src="styles/legend/EstacionesMetro_5_2.png" /> 03<br />\
    <img src="styles/legend/EstacionesMetro_5_3.png" /> 08<br />\
    <img src="styles/legend/EstacionesMetro_5_4.png" /> 09<br />\
    <img src="styles/legend/EstacionesMetro_5_5.png" /> B<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_AlcaldaCuauhtmoc_1.setVisible(true);lyr_Metrobus_2.setVisible(true);lyr_Metro_3.setVisible(true);lyr_EstacionesMetrobus_4.setVisible(true);lyr_EstacionesMetro_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AlcaldaCuauhtmoc_1,lyr_Metrobus_2,lyr_Metro_3,lyr_EstacionesMetrobus_4,lyr_EstacionesMetro_5];
lyr_AlcaldaCuauhtmoc_1.set('fieldAliases', {'fid': 'fid', '_id': '_id', 'id': 'id', 'nomgeo': 'nomgeo', 'cve_mun': 'cve_mun', 'cve_ent': 'cve_ent', 'cvegeo': 'cvegeo', 'gid': 'gid', 'g_pnt_2': 'g_pnt_2', 'geo_shp': 'geo_shp', });
lyr_Metrobus_2.set('fieldAliases', {'fid': 'fid', 'SISTEMA': 'SISTEMA', 'LINEA': 'LINEA', 'RUTA': 'RUTA', 'TRAMO': 'TRAMO', });
lyr_Metro_3.set('fieldAliases', {'fid': 'fid', 'SISTEMA': 'SISTEMA', 'LINEA': 'LINEA', 'RUTA': 'RUTA', });
lyr_EstacionesMetrobus_4.set('fieldAliases', {'fid': 'fid', 'SISTEMA': 'SISTEMA', 'NOMBRE': 'NOMBRE', 'LINEA': 'LINEA', 'EST': 'EST', 'CVE_EST': 'CVE_EST', 'CVE_EOD17': 'CVE_EOD17', 'TIPO': 'TIPO', 'ALCALDIAS': 'ALCALDIAS', 'AÑO': 'AÑO', 'ACCESIB': 'ACCESIB', });
lyr_EstacionesMetro_5.set('fieldAliases', {'fid': 'fid', 'SISTEMA': 'SISTEMA', 'NOMBRE': 'NOMBRE', 'LINEA': 'LINEA', 'EST': 'EST', 'CVE_EST': 'CVE_EST', 'CVE_EOD17': 'CVE_EOD17', 'TIPO': 'TIPO', 'ALCALDIAS': 'ALCALDIAS', 'AÑO': 'AÑO', });
lyr_AlcaldaCuauhtmoc_1.set('fieldImages', {'fid': 'Hidden', '_id': 'Hidden', 'id': 'Hidden', 'nomgeo': 'Hidden', 'cve_mun': 'Hidden', 'cve_ent': 'Hidden', 'cvegeo': 'Hidden', 'gid': 'Hidden', 'g_pnt_2': 'Hidden', 'geo_shp': 'Hidden', });
lyr_Metrobus_2.set('fieldImages', {'fid': 'Hidden', 'SISTEMA': 'Hidden', 'LINEA': 'TextEdit', 'RUTA': 'TextEdit', 'TRAMO': 'Hidden', });
lyr_Metro_3.set('fieldImages', {'fid': 'Hidden', 'SISTEMA': 'TextEdit', 'LINEA': 'TextEdit', 'RUTA': 'Hidden', });
lyr_EstacionesMetrobus_4.set('fieldImages', {'fid': 'Hidden', 'SISTEMA': 'TextEdit', 'NOMBRE': 'TextEdit', 'LINEA': 'TextEdit', 'EST': 'Hidden', 'CVE_EST': 'Hidden', 'CVE_EOD17': 'Hidden', 'TIPO': 'Hidden', 'ALCALDIAS': 'Hidden', 'AÑO': 'Hidden', 'ACCESIB': 'Hidden', });
lyr_EstacionesMetro_5.set('fieldImages', {'fid': 'Hidden', 'SISTEMA': 'Hidden', 'NOMBRE': 'TextEdit', 'LINEA': 'TextEdit', 'EST': 'Hidden', 'CVE_EST': 'Hidden', 'CVE_EOD17': 'Hidden', 'TIPO': 'Hidden', 'ALCALDIAS': 'Hidden', 'AÑO': 'Hidden', });
lyr_AlcaldaCuauhtmoc_1.set('fieldLabels', {});
lyr_Metrobus_2.set('fieldLabels', {'LINEA': 'inline label', 'RUTA': 'inline label', });
lyr_Metro_3.set('fieldLabels', {'SISTEMA': 'no label', 'LINEA': 'inline label', });
lyr_EstacionesMetrobus_4.set('fieldLabels', {'SISTEMA': 'inline label', 'NOMBRE': 'inline label', 'LINEA': 'header label', });
lyr_EstacionesMetro_5.set('fieldLabels', {'NOMBRE': 'inline label', 'LINEA': 'inline label', });
lyr_EstacionesMetro_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});