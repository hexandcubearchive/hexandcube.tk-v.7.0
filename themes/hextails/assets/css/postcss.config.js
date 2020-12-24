const themeDir = __dirname + '/../../';

const purgecss = require('@fullhuman/postcss-purgecss')({

    content: [
        themeDir + 'layouts/**/*.html',
        themeDir + 'content/**/*.html',
        themeDir + 'content/**/*.md',
        'layouts/**/*.html',
        'content/**/*.html',
        'content/**/*.md',
        'config.toml'
    ],

    defaultExtractor: content => {
        // Capture as liberally as possible, including things like `h-(screen-1.5)`
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

        // Capture classes within other delimiters like .block(class="w-1/2") in Pug
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

        return broadMatches.concat(innerMatches)
    }
})

module.exports = {    
    plugins: [        
        require('postcss-import')({
            path: [themeDir]
            }), 
        require('tailwindcss')(themeDir + 'assets/css/tailwind.config.js'),
        require('autoprefixer')({
            path: [themeDir]
        }),
        ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
    ]
}