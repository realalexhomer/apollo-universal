// const COUNTER_SUBSCRIPTION = 'counter_subscription';

// export default (pubsub: any) => ({
//   Query: {
//     serverCounter(obj: any, args: any, context: any) {
//       return context.Counter.counterQuery();
//     }
//   },
//   Mutation: {
//     async addServerCounter(obj: any, { amount }: any, context: any) {
//       await context.Counter.addCounter(amount);
//       const counter = await context.Counter.counterQuery();

//       pubsub.publish(COUNTER_SUBSCRIPTION, {
//         counterUpdated: { amount: counter.amount }
//       });

//       return counter;
//     }
//   },
//   Subscription: {
//     counterUpdated: {
//       subscribe: () => pubsub.asyncIterator(COUNTER_SUBSCRIPTION)
//     }
//   }
// });

const VIDEO_UPLOAD_SUBSCRIPTION = 'video_upload_subscription';

export default (pubsub: any) => ({
  Query: {},
  Mutation: {
    async uploadVideoMutation(obj: any, { title }: any, context: any) {
      await context.VideoUpload.uploadVideo(title);
      const video = await context.Video.videoUpload();

      pubsub.publish(VIDEO_UPLOAD_SUBSCRIPTION, {
        videoUploaded: { title: video.title }
      });

      return video;
    }
  },
  Subscription: {
    videoUploaded: {
      subscribe: () => pubsub.asyncIterator(VIDEO_UPLOAD_SUBSCRIPTION)
    }
  }
});
