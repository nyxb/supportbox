import { defineBuildConfig } from 'buildkarium'

export default defineBuildConfig({
   entries: [
      'src/index',
      'src/cli',
   ],
   declaration: true,
   clean: true,
   rollup: {
      emitCJS: true,
   },
})
