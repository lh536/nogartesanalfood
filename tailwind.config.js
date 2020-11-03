module.exports = {
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
    },
    purge: {
        // + DESCOMENTAR PARA PRODUCCIÓN
        // enabled: true,
        // content: ['./build/**/*.html'],
    },
    theme: {
        fontFamily: {
            sacramento: ['Sacramento', 'sans-serif'],
            kaushan: ['Kaushan Script', 'sans-serif'],
        },
        extend: {
            colors: {
                amarilloNoga: '#FFC430',
                rojoNoga: '#990012',
            },
        },
    },
    variants: {},
    plugins: [],
}