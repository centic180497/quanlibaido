import NunitoRegular from 'assets/fonts/Nunito/Nunito-Regular.ttf'

const Nunito = {
    fontFamily: 'Nunito',
    fontStyle: 'normal',
    fontDisplay: 'auto',
    fontWeight: 400,
    src: `local(Nunito), local(Nunito Regular), url(${NunitoRegular}) format('truetype')`,
    unicodeRange:
        'U+0041-U+005A, U+0061-U+007A, U+00C0-U+00C3, U+00C8-U+00CA, U+00CC-U+00CD, U+00D2-U+00D5, U+00D9-U+00DA, U+00DD, U+00E0-U+00E3, U+00E8-U+00EA, U+00EC-U+00ED, U+00F2-U+00F5, U+00F9-U+00FA, U+00FD, U+0102-U+0103, U+0110-U+0111, U+0128-U+0129, U+0168-U+0169, U+01A0-U+01A1, U+01AF-U+01B0, U+1EA0-U+1EF9',
}

export default {
    '@global': {
        '@font-face': [Nunito],
    },
}
