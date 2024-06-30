import Service from '../config/api/service.js';
import Occurrence from '../models/occurrence.js';

class OccurrenceService extends Service {
  constructor() {
    super(Occurrence);
  }

  getAllFromUser(createdBy) {
    return this.model.find({ createdBy });
  }

  create(data) {
    return this.model.create(data);
  }
}

export default OccurrenceService;
