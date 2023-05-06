const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@UI': 'src/components/UI',
        '@container': 'src/container',
        '@constants': 'src/constants',
        '@hoc-helpers': 'src/hoc-helpers',
        '@services': 'src/services',
        '@utils': 'src/utils',
        '@routes': 'src/routes',
        '@static': 'src/static',
        '@NotFoundPage': 'src/NotFoundPage',
        '@hooks': 'src/hooks',
    })(config)
    return config;
}