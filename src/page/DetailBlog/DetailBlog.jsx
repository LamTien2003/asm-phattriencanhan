import styles from './DetailBlog.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';

const cx = classNames.bind(styles);

const DetailBlog = () => {
    return (
        <div className={cx('wrapper')}>
            <img src={images.blogAnimal2} alt="" />
            <div className={cx('info')}>
                <p className={cx('slogan')}>Lovely Pet mang đến yêu thương !</p>
                <h3 className={cx('title')}>Dog Grooming Tips to Keep Your Best Friend Healthy and Happy</h3>
                <p className={cx('date')}>May 5, 2023</p>
            </div>

            <div className={cx('wp-story')}>
                <h3 className={cx('title-story')}>Brushing</h3>
                <p className={cx('text-story')}>
                    Whether your dog is an obsessive groomer or wants to roll in every mud puddle, every pooch requires
                    regular grooming to look and feel their best. Here’s how to do all the basics at home! Pet grooming
                    can feel a little intimidating! Between your dog running for the hills every time they hear the bath
                    running and the dizzying array of brushes available at the pet store, it can be hard to know where
                    to start. Keep reading to learn the basic grooming supplies you should have on hand and how to use
                    them right to keep your dog in tip-top shape!
                </p>
            </div>


            <div className={cx('wp-story')}>
                <h3 className={cx('title-story')}>Bathing</h3>
                <p className={cx('text-story')}>
                Dogs should be bathed every 1-3 months depending on their lifestyle—or how often they like to roll around in the mud. You can bathe your dog as often as needed to stay clean, but even the most neat and tidy dogs require periodic baths to stay fresh and remove built up skin cells and oils.

You can bathe them in your bathtub or shower, outside by a hose, or anywhere that you don’t mind getting real wet as they inevitably shake water all over. When they’re ready for bath time (possibly thanks to a bribe of bathtub peanut butter), moisten their fur with warm (not hot) water and give them a good scrub down with dog shampoo.

Shampoo really needs to be massaged in to grab onto dirt and do its job right, so work in sections and rub for 3-5 minutes in each area to work in the product. Work carefully around the ears and eyes, using a washcloth or cotton ball if needed to avoid getting shampoo and water inside.
                </p>
            </div>


            <div className={cx('wp-story')}>
                <h3 className={cx('title-story')}>Trimming</h3>
                <p className={cx('text-story')}>
                Some dogs with longer hair can benefit from a little haircut for their comfort. You don’t have to give your dog a full poodle cut (and it’s actually recommended to not use razors or clippers on your pet without expert training), but there are some areas you should pay attention to.

If your dog has long fur on their paws, hold their paw gently but firmly with one hand and use the other to carefully trim any long tufts of hair to prevent painful tangles and clinging dirt or snow. If your dog tries to flail or yank their foot away, get an assistant to help distract them with their favorite treats!

If long hair is flopping in your dog’s eyes or dragging in their water bowl, a small amount of trimming can make a big quality of life difference! Get them relaxed and settled before making small, careful snips while holding them still. Go slow and don’t be afraid to take breaks.

If you don’t feel confident doing this, you can leave trimming their hair to the experts. (We understand your struggle, wiggly dog owners.)
                </p>
            </div>
        </div>
    );
};

export default DetailBlog;
