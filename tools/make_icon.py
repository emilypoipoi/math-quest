import sys
OWL = """..KK........KK..
..KBK......KBK..
..KBBKKKKKKBBK..
..KBBBBBBBBBBK..
.KBBBBBBBBBBBBK.
.KBWWWWBBWWWWBK.
.KBWPPWBBWPPWBK.
.KBWPPWOOWPPWBK.
.KBWWWWOOWWWWBK.
.KBBLLLLLLLLBBK.
.KBLLLKLLKLLLBK.
.KBLLLLLLLLLLBK.
.KBLKLLKKLLKLBK.
..KBLLLLLLLLBK..
...KKKKKKKKKK...
....OO....OO....""".split()
assert all(len(r)==16 for r in OWL) and len(OWL)==16
C = {'K':'#2b2350','B':'#b0703c','L':'#f6d9a8','W':'#ffffff','P':'#2b2350','O':'#ff9f1c','H':'#ffffff'}
def svg(px, bg=True):
    size=512; off=(size-16*px)//2; out=[]
    out.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" shape-rendering="crispEdges">')
    if bg:
        out.append('<rect width="512" height="512" fill="#6c4cf5"/>')
        # pixel checker glow + stars
        for (x,y,c) in [(56,72,'#ffd23f'),(440,96,'#ff6fb5'),(424,420,'#3fa7ff'),(72,424,'#2ec27e'),(448,260,'#ffd23f'),(48,248,'#ff9f1c')]:
            s=16
            out += [f'<rect x="{x}" y="{y-s}" width="{s}" height="{s*3}" fill="{c}"/>',
                    f'<rect x="{x-s}" y="{y}" width="{s*3}" height="{s}" fill="{c}"/>']
    for r,row in enumerate(OWL):
        for col,ch in enumerate(row):
            if ch in C:
                out.append(f'<rect x="{off+col*px}" y="{off+r*px}" width="{px}" height="{px}" fill="{C[ch]}"/>')
    # eye shine
    for col in (4,10):
        out.append(f'<rect x="{off+col*px}" y="{off+6*px}" width="{px//2}" height="{px//2}" fill="#ffffff"/>')
    out.append('</svg>'); return '\n'.join(out)
open('icons/icon.svg','w').write(svg(22))
open('icons/maskable.svg','w').write(svg(18))
