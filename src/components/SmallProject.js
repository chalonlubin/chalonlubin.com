

/** SmallProject
 *
 * State: none
 * Props: data = {title, subtitle, image, link, github}
 *
 * App -> RouteList -> Projects -> Project
 *
 */
function SmallProject({ title, goal, tech, github }) {
  return (
    <div class="card w-80 bg-gray-900 text-primary-content">
        <div class="card-body">
          <h2 class="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn">Buy Now</button>
          </div>
        </div>
      </div>
  );
}

export default SmallProject;