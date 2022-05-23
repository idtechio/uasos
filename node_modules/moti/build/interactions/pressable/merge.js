export function mergeAnimateProp(interaction, prop, extra) {
    'worklet';
    let final = {};
    for (const animate of [prop, extra]) {
        if (animate) {
            if (typeof animate === 'function') {
                final = Object.assign(final, animate(interaction));
            }
            else {
                final = Object.assign(final, animate);
            }
        }
    }
    return final;
}
//# sourceMappingURL=merge.js.map